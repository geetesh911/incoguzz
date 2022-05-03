import bcrypt from "bcrypt";
import { Request } from "express";
import { addHours } from "date-fns";
import { SignUpInput } from "@/user/inputs/signup.input";
import AuthService from "../auth/auth.service";
import { LoginInput } from "@/user/inputs/login.input";
import { RefreshAcccessTokenInput } from "@/user/inputs/refresh-token.input";
import { ForgotPasswordInput } from "@/user/inputs/forgot-password.input";
import { ResetPasswordInput } from "@/user/inputs/reset-password.input";
import MailingService from "@/common/services/mail.service";
import JWTHelper from "@/common/helpers/jwt.helper";
import { MailOptions } from "@/common/interfaces/mail.interface";
import { logger } from "@/utils/logger";
import { Urls } from "@/common/enums/urls.enum";
import {
  ILoginJwtPayload,
  IResetPasswordJwtPayload,
  IUserVerificationJwtPayload,
} from "@/auth/interfaces/auth.interface";
import DateHelper from "@/common/helpers/date.helper";
import { LoginOutput } from "@/user/outputs/login.output";
import { ForgotPasswordOutput } from "@/user/outputs/forgot-password.output";
import { ForbiddenError, UserInputError } from "apollo-server-errors";
import {
  IGoogleUserData,
  IJSONProfile,
} from "@/auth/interfaces/google.interface";
import {
  AccountType,
  Profile,
  Role,
  TokenType,
  User,
} from "@/prisma/generated/type-graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { ResetPasswordOutput } from "./outputs/reset-password.output";
import UserRepository from "./repositories/user.repository";
import { SignUpOutput } from "./outputs/signup.output";
import { Constants } from "./enums/constants.enum";
import { GoogleAuthOutput } from "./outputs/google-auth.output";
import { ILoginTokens } from "./interfaces/login.interface";
import { PrismaErrors } from "@/common/enums/prisma-error.enum";
import { UserOutput } from "./outputs/user.output";
import UserHelper from "./helpers/user.helper";
import { ProfileInput } from "./inputs/profile.input";
import { UpdateUserInput } from "./inputs/update-user.input";
import { UpdateUserOutput } from "./outputs/update-user.output";
import { ChangePasswordInput } from "./inputs/change-password.input";
import { FileUpload } from "graphql-upload";
import { AzureContainersEnum } from "./enums/file.enum";
import AzureStorageHelper from "@/common/helpers/azure-storage.helper";
import StorageService from "@/common/services/storage.service";
import { Prisma } from "@prisma/client";
import { injectable } from "tsyringe";

@injectable()
class UserService {
  constructor(
    private readonly mailingService: MailingService,
    private readonly dateHelper: DateHelper,
    private readonly jwtHelper: JWTHelper,
    private readonly authService: AuthService,
    private readonly userHelper: UserHelper,
    private readonly userRepository: UserRepository,
    private readonly storageService: StorageService,
    private readonly azureStorageHelper: AzureStorageHelper,
  ) {}

  /**
   * Manual user flow
   * - Find if email is unique
   * - Create user in database
   * - Send verification email
   * - return the signup output
   */
  public async create(createUserInput: SignUpInput): Promise<SignUpOutput> {
    const { email, username, password, nickname } = createUserInput;

    const userInput: Prisma.UserCreateInput = {
      email,
      username,
      password,
      profile: { create: { nickname } },
    };

    await this.userRepository.isEmailAndUsernameUnique(
      userInput.email,
      userInput.username,
    );

    this.setRegistrationInfo(userInput);

    const user = await this.userRepository.createUser(userInput);

    this.sendVerificationEmail(userInput.email, userInput.id);

    return this.buildRegistrationInfo(user);
  }

  /**
   * Google Authentication flow
   * - Get user from email and also if he is a verified user or not
   * When user is found
   * - Generate access and refresh tokens
   * - Get previousTokens of the user if any
   * - and update user info in the database
   * When user is not found
   * - Create a new google user and send verIfication email and return google sign up output
   */
  public async googleAuthentication(
    req: Request,
    googleProfile: IGoogleUserData,
  ): Promise<GoogleAuthOutput | LoginOutput> {
    const profileJsonData = googleProfile.profile._json;
    const { id, email } = profileJsonData;

    const user = await this.userRepository.findByEmailWithProfileAndTokens(
      email,
    );

    if (!user) {
      try {
        const userData = await this.createGoogleUserData(profileJsonData);

        this.setRegistrationInfo(userData);

        const newGoogleUser = await this.userRepository.createUser(userData);

        this.sendVerificationEmail(newGoogleUser.email, newGoogleUser.id);

        return this.buildGoogleRegistrationInfo(newGoogleUser);
      } catch (error) {
        if (
          error instanceof PrismaClientKnownRequestError &&
          error?.code === PrismaErrors.UniqueConstraint
        )
          throw new ForbiddenError("User is not verified");

        throw Error(error as string);
      }
    }

    return this.setUserLoginInfo(req, user, id);
  }

  public async createGoogleUserData(
    googleProfile: IJSONProfile,
  ): Promise<Prisma.UserCreateInput> {
    const { email, id, name } = googleProfile;
    const userData: Prisma.UserCreateInput = {
      email,
      username: email,
      googleUserId: id,
      profile: {
        create: {
          nickname: name,
        },
      },
    };
    return userData;
  }

  /**
   * Verification user flow
   * - Verify received token
   * - Verify user in db if user is eligible
   */
  public async verifyUserEmail(verificationToken: string): Promise<boolean> {
    const { userId } =
      this.jwtHelper.verifyJwtToken<IUserVerificationJwtPayload>(
        verificationToken,
      );

    await this.userRepository.setUserAsVerified(userId);

    return true;
  }

  public async sendVerificationEmail(email: string, userId: string) {
    const dataStoredInToken: IUserVerificationJwtPayload = { email, userId };

    const token = this.jwtHelper.generateJwtToken<IUserVerificationJwtPayload>(
      dataStoredInToken,
      `${Constants.HOURS_TO_VERIFY}h`,
    );

    const mailOptions: MailOptions = {
      to: email,
      html: { path: "verification" },
      locals: {
        name: email,
        link: `${Urls.FrontendUrl}/auth/verify-email?verificationToken=${token}`,
      },
    };

    await this.mailingService.sendMail(mailOptions, (error, info) => {
      if (error) logger.error(error);
      else logger.info(info);
    });
  }

  /**
   * Login Flow
   * - Get user with email with its profile and tokens
   * If user user is not found
   * - throw error
   * If user is found
   * - check whether user is temporily blocked or not
   * - if blocked throw error
   * - if not the check password
   * - generate access and refresh tokens and update user login detials with tokens
   */
  public async login(
    req: Request,
    loginInput: LoginInput,
  ): Promise<LoginOutput> {
    const user =
      await this.userRepository.findByEmailOrUsernameWithProfileAndTokens(
        loginInput.emailOrUsername,
      );

    if (!user) {
      throw new UserInputError("Wrong email/username or password.");
    }

    this.isUserBlocked(user);

    const match = await this.checkPassword(loginInput.password, user.password);

    if (!match) {
      await this.passwordsDoNotMatch(user);
      throw new UserInputError("Wrong email or password.");
    }

    return this.setUserLoginInfo(req, user);
  }

  /**
   * Logout
   * - Get user token
   * - Verify jwt token
   * - Delete user tokens
   * - return true
   */
  public async logout(req: Request): Promise<boolean> {
    const token = await this.authService.returnJwtExtractor()(req);
    const { userId } = this.jwtHelper.verifyJwtToken<ILoginJwtPayload>(token);

    this.userRepository.deleteUserTokens(userId);

    return true;
  }

  /**
   * Refresh Access Token
   * - Get user from the refresh token
   * - If user is not found throw error
   * - Create access token
   * - Update access token of the user in db
   * - return the new access token to user
   */
  public async refreshAccessToken(
    req: Request,
    refreshAccessTokenInput: RefreshAcccessTokenInput,
  ) {
    const user = await this.authService.findRefreshToken(
      refreshAccessTokenInput.refreshToken,
    );
    if (!user) {
      throw new UserInputError("Bad request");
    }
    const accessToken = await this.authService.createAccessToken(user);

    const previousAccessTokenId: string =
      user.tokens.find(
        token => token.token === refreshAccessTokenInput.refreshToken,
      ).id || "";

    this.userRepository.upsertToken({
      req,
      previousTokenId: previousAccessTokenId,
      token: accessToken,
      tokenType: TokenType.ACCESS,
      userId: user.id,
    });

    return {
      accessToken,
    };
  }

  /**
   * Forgot Password Flow
   * - get user with its tokens from received email
   * - if user is not found throw error
   * - if user is found check if user is blocked and if blocked throw error
   * - if user is not blocked create forgot password token in db
   * - send token to the received email
   *
   * Verification
   * - Verify recevied jwt token
   * - Set first used of token in db using verification uuid
   * - Return verification response
   *
   * Reset Password
   * - Reset password of the user
   * - update forgot password token finalUsed to true
   */
  public async forgotPassword(
    req: Request,
    forgotPasswordInput: ForgotPasswordInput,
  ): Promise<ForgotPasswordOutput> {
    const { emailOrUsername } = forgotPasswordInput;

    const user = await this.userRepository.findByEmailOrUsernameWithTokens(
      emailOrUsername,
    );

    if (!user) {
      throw new UserInputError("Email/Username not found.");
    }

    this.isUserBlocked(user);

    const token = await this.userRepository.createForgotPasswordToken(
      req,
      user,
    );

    await this.sendResetPasswordEmail({
      email: user?.email,
      verificationTokenId: token?.id,
      verificationUuid: token?.token,
      userId: user.id,
    });

    return {
      email: user?.email,
      message: "verification email sent.",
      verificationUuid: token.token,
      verificationTokenId: token?.id,
      isVerified: true,
    };
  }

  public async sendResetPasswordEmail(
    dataStoredInToken: IResetPasswordJwtPayload,
  ) {
    const { email } = dataStoredInToken;
    const token = this.jwtHelper.generateJwtToken<IResetPasswordJwtPayload>(
      dataStoredInToken,
      `${Constants.HOURS_TO_RESET_PASSWORD}h`,
    );

    const mailOptions: MailOptions = {
      to: email,
      html: { path: "reset-password" },
      locals: {
        name: email,
        link: `${Urls.FrontendUrl}/auth/reset-password?verificationToken=${token}`,
      },
    };

    await this.mailingService.sendMail(mailOptions, (error, info) => {
      if (error) logger.error(error);
      else logger.info(info);
    });
  }

  public async forgotPasswordVerify(
    resetPasswordToken: string,
  ): Promise<ForgotPasswordOutput> {
    const { verificationUuid, verificationTokenId, email } =
      this.jwtHelper.verifyJwtToken<IResetPasswordJwtPayload>(
        resetPasswordToken,
      );

    await this.userRepository.setForgotPasswordFirstUsed(verificationTokenId);

    return {
      email: email,
      message: "reset your password",
      isVerified: true,
      verificationUuid,
      verificationTokenId,
    };
  }

  public async resetPassword(
    resetPasswordInput: ResetPasswordInput,
  ): Promise<ResetPasswordOutput> {
    try {
      await this.userRepository.resetUserPassword(resetPasswordInput);

      return {
        email: resetPasswordInput.email,
        message: "password successfully changed.",
      };
    } catch (error) {
      logger.error(error);
      throw new UserInputError("Bad request");
    }
  }

  public async getUser(userEmail: string): Promise<UserOutput> {
    const user = await this.userRepository.findByEmailWithProfile(userEmail);
    return {
      id: user?.id,
      email: user?.email,
      username: user?.username,
      profile: user?.profile,
      role: user?.role as Role,
      accountType: user?.accountType as AccountType,
      isVerified: user?.isVerified,
      active: user?.active,
      lastLogin: user?.lastLogin,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    };
  }

  public async isUsernameAvailable(username: string): Promise<boolean> {
    return this.userRepository.isUsernameAvailable(username);
  }

  public async deactivateUser(
    req: Request,
    userData: ILoginJwtPayload,
  ): Promise<boolean> {
    await this.userRepository.deactivateUser(userData?.userId);

    await this.logout(req);

    return true;
  }

  public async verifyAccessToken(
    req: Request,
    accessToken: string,
  ): Promise<boolean> {
    const jwtToken = this.jwtHelper.jwtExtractor(req);

    const userData = await this.userHelper.getUser(jwtToken);

    const user = await this.userRepository.findByEmailWithTokens(
      userData?.email,
    );

    return user?.tokens?.findIndex(({ token }) => token === accessToken) !== -1;
  }

  public async updateProfile(
    userId: string,
    profileInput: ProfileInput,
  ): Promise<Profile> {
    return this.userRepository.updateProfile(userId, profileInput);
  }

  public async updateUserInfo(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    const user = await this.userRepository.updateUserInfo(
      userId,
      updateUserInput,
    );

    return {
      username: user?.username,
      profile: user?.profile,
    };
  }

  public async changeUserPassword(
    email: string,
    { oldPassword, newPassword }: ChangePasswordInput,
  ): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);

    const match = await this.checkPassword(oldPassword, user.password);

    if (!match) {
      throw new UserInputError("Incorrect old password");
    }

    await this.userRepository.changeUserPassword(user?.id, newPassword);

    return true;
  }

  public async updateProfilePicture(
    userData: ILoginJwtPayload,
    file: FileUpload,
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      await this.storageService.uploadFile(file, {
        containerName: AzureContainersEnum.profile,
        onSuccess: async (_uploadResponse, fileUrl) => {
          const dpUrl = fileUrl;

          await this.handleProfilePictureDelete(userData);

          await this.userRepository.updateProfilePicture(
            userData.userId,
            dpUrl,
          );

          resolve(true);
        },
        onError: async () => reject(false),
      });
    });
  }

  public async removeProfilePicture(userData: ILoginJwtPayload) {
    await this.handleProfilePictureDelete(userData);

    await this.userRepository.updateProfilePicture(userData?.userId, null);
  }

  // ********************************************
  // ╔═╗╦═╗╦╦  ╦╔═╗╔╦╗╔═╗  ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
  // ╠═╝╠╦╝║╚╗╔╝╠═╣ ║ ║╣   ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
  // ╩  ╩╚═╩ ╚╝ ╩ ╩ ╩ ╚═╝  ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
  // ********************************************

  private async handleProfilePictureDelete(userData: ILoginJwtPayload) {
    const profile = (
      await this.userRepository.findByEmailWithProfile(userData?.email)
    ).profile;

    if (profile?.dpUrl) {
      const [, imageName] =
        this.azureStorageHelper.getFileAndContainerNameFromUrl(profile?.dpUrl);

      await this.storageService.deleteFileFromAzure(
        imageName,
        AzureContainersEnum.profile,
      );
    }
  }

  private async setUserLoginInfo(
    req: Request,
    user: User,
    googleUserId?: string,
  ): Promise<LoginOutput> {
    const accessToken = await this.authService.createAccessToken(user);
    const refreshToken = await this.authService.createRefreshToken();

    const previousTokensIds: ILoginTokens =
      this.authService.getPreviousAuthTokensIds(user);

    const currentTokens: ILoginTokens = {
      accessToken,
      refreshToken,
    };

    await this.userRepository.updateUserLoginInfo({
      req,
      userId: user.id,
      tokens: currentTokens,
      previousTokensIds,
      googleUserId,
    });

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      profile: user.profile,
      accessToken,
      refreshToken,
    };
  }

  private setRegistrationInfo(user: Prisma.UserCreateInput) {
    user.verificationExpires = addHours(new Date(), Constants.HOURS_TO_VERIFY);
  }

  private buildRegistrationInfo(user: User): SignUpOutput {
    const { id, email, username, isVerified } = user;
    return { id, email, username, isVerified };
  }

  private buildGoogleRegistrationInfo(user: User): GoogleAuthOutput {
    const { id, email, username, isVerified } = user;
    return { id, email, username, isVerified };
  }

  private async checkPassword(attemptPass: string, userPassword: string) {
    return bcrypt.compare(attemptPass, userPassword);
  }

  private isUserBlocked(user: User) {
    if (this.dateHelper.compareDates(user.blockExpires, new Date()) === 1) {
      throw new ForbiddenError("User has been blocked try later.");
    }
  }

  private async passwordsDoNotMatch(user: User) {
    const loginAttempts = user.loginAttempts + 1;

    await this.userRepository.incrementLoginAttempts(user.email);

    if (loginAttempts >= Constants.LOGIN_ATTEMPTS_TO_BLOCK) {
      await this.userRepository.blockUser(user.email);
      throw new ForbiddenError("User blocked.");
    }
  }
}

export default UserService;
