import AuthService from "@/auth/auth.service";
import { PrismaErrors } from "@/common/enums/prisma-error.enum";
import DateHelper from "@/common/helpers/date.helper";
import ValidationHelper from "@/common/helpers/validation.helper";
import BaseRepository from "@/common/repositories/BaseRepository";
import PrismaService from "@/common/services/prisma.service";
import { Profile, User } from "@/prisma/generated/type-graphql";
import { TokenType } from "@/prisma/generated/type-graphql/enums/TokenType";
import { Token } from "@/prisma/generated/type-graphql/models/Token";
import { UserInputError } from "apollo-server-errors";
import { addHours } from "date-fns";
import { Request } from "express";
import { Service } from "typedi";
import { v4 } from "uuid";
import { Constants } from "../enums/constants.enum";
import UserHelper from "../helpers/user.helper";
import { ProfileInput } from "../inputs/profile.input";
import { ResetPasswordInput } from "../inputs/reset-password.input";
import { UpdateUserInput } from "../inputs/update-user.input";
import { ILoginTokens } from "../interfaces/login.interface";
import { IUserInclude } from "../interfaces/user-include.interface";
import { Prisma } from "@prisma/client";

interface IReader {
  findAll: () => Promise<User[]>;
  findByEmail: (email: string, include?: IUserInclude) => Promise<User | null>;
  findByUsername: (
    username: string,
    include?: IUserInclude,
  ) => Promise<User | null>;
  findByEmailOrUsername: (
    emailOrUsername: string,
    include?: IUserInclude,
  ) => Promise<User | null>;
  findByEmailWithProfile: (email: string) => Promise<User | null>;
  findByEmailWithProfileAndTokens: (email: string) => Promise<User | null>;
  findByUsernameWithProfileAndTokens: (
    username: string,
  ) => Promise<User | null>;
  findByEmailOrUsernameWithTokens: (username: string) => Promise<User | null>;
  findByEmailOrUsernameWithProfileAndTokens: (
    username: string,
  ) => Promise<User | null>;
  findByEmailWithTokens: (email: string) => Promise<User | null>;
  findByGoogleUserId: (googleUserId: string) => Promise<User | null>;
  isEmailAndUsernameUnique: (email: string, username: string) => Promise<void>;
  isUsernameAvailable: (username: string) => Promise<boolean>;
}

interface IWriter {
  createUser: (userInput: Prisma.UserCreateInput) => Promise<User>;
  createForgotPasswordToken: (req: Request, user: User) => Promise<Token>;
  incrementLoginAttempts: (email: string) => Promise<User>;
  blockUser: (email: string) => Promise<void>;
  updateUserLoginInfo: (
    req: Request,
    userId: string,
    tokens: ILoginTokens,
    previousTokens: ILoginTokens,
    googleUserId: string,
  ) => Promise<void>;
  upsertToken: (
    req: Request,
    previousToken: string,
    token: string,
    tokenType: TokenType,
    userId: string,
  ) => Promise<void>;
  setForgotPasswordFirstUsed: (token: string) => Promise<Token>;
  setUserAsVerified: (userId: string) => Promise<void>;
  deactivateUser: (userId: string) => Promise<User | null>;
  deleteUserTokens: (userId: string) => Promise<void>;
  updateProfile: (
    userId: string,
    profileInput: ProfileInput,
  ) => Promise<Profile>;
  updateProfilePicture: (userId: string, dpUrl: string) => Promise<Profile>;
  updateUserInfo: (
    userId: string,
    updateUserInput: UpdateUserInput,
  ) => Promise<User | null>;
  changeUserPassword: (
    userId: string,
    newPassword: string,
  ) => Promise<User | null>;
  resetUserPassword: (
    resetPasswordInput: ResetPasswordInput,
    token: string,
  ) => Promise<User>;
}

type TUserRepository = IReader & IWriter;

@Service()
class UserRepository extends BaseRepository implements TUserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly dateHelper: DateHelper,
    private readonly userHelper: UserHelper,
    private readonly validationHelper: ValidationHelper,
  ) {
    super("user");
  }

  public async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { _count: true } });
  }

  public async findByUsername(
    username: string,
    include?: IUserInclude,
  ): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { username },
      include: { ...include, _count: true },
    });

    this.userHelper.isUserVerified(user);

    return user;
  }

  public async findByEmailOrUsername(
    emailOrUsername: string,
    include?: IUserInclude,
  ): Promise<User | null> {
    let user: User;
    if (this.validationHelper.validateEmail(emailOrUsername)) {
      user = await this.prisma.user.findUnique({
        where: { email: emailOrUsername },
        include: { ...include, _count: true },
      });
    } else {
      user = await this.prisma.user.findUnique({
        where: { username: emailOrUsername },
        include: { ...include, _count: true },
      });
    }

    this.userHelper.isUserVerified(user);

    return user;
  }

  public async findByEmail(
    email: string,
    include?: IUserInclude,
  ): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { ...include, _count: true },
    });

    this.userHelper.isUserVerified(user);

    return user;
  }

  public async findByEmailWithProfile(email: string): Promise<User | null> {
    return this.findByEmail(email, { profile: true });
  }

  public async findByEmailWithProfileAndTokens(
    email: string,
  ): Promise<User | null> {
    return this.findByEmail(email, { profile: true, tokens: true });
  }

  public async findByUsernameWithProfileAndTokens(
    username: string,
  ): Promise<User | null> {
    return this.findByUsername(username, { profile: true, tokens: true });
  }

  public async findByEmailOrUsernameWithTokens(
    emailOrUsername: string,
  ): Promise<User | null> {
    return this.findByEmailOrUsername(emailOrUsername, {
      tokens: true,
    });
  }

  public async findByEmailOrUsernameWithProfileAndTokens(
    emailOrUsername: string,
  ): Promise<User | null> {
    return this.findByEmailOrUsername(emailOrUsername, {
      profile: true,
      tokens: true,
    });
  }

  public async findByEmailWithTokens(email: string): Promise<User | null> {
    return this.findByEmail(email, { tokens: true });
  }

  public async findByGoogleUserId(googleUserId: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { googleUserId, isVerified: true },
      include: { profile: true, _count: true },
    });
    return user || null;
  }

  public async isEmailAndUsernameUnique(
    email: string,
    username: string,
  ): Promise<void> {
    const user = await this.prisma.user.findFirst({
      where: { email, username },
    });
    if (user) {
      throw new UserInputError("Email and username must be unique.");
    }
  }

  public async isUsernameAvailable(username: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user) {
      return false;
    }
    return true;
  }

  public async createUser(userInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: userInput });
  }

  public async createForgotPasswordToken(
    req: Request,
    user: User,
  ): Promise<Token> {
    const verificationUuid = v4();
    const expiresIn = addHours(
      this.dateHelper.getCurrentDate(),
      Constants.HOURS_TO_VERIFY,
    );

    const data = await this.authService.createTokenData(
      req,
      verificationUuid,
      TokenType.FORGOT_PASSWORD,
      expiresIn,
    );

    const existingTokenId =
      user.tokens?.find(({ type }) => type === TokenType.FORGOT_PASSWORD)?.id ||
      "";

    return this.prisma.token.upsert({
      where: {
        id: existingTokenId,
      },
      update: data,
      create: {
        user: { connect: { id: user.id } },
        ...data,
      },
    });
  }

  public async incrementLoginAttempts(email: string): Promise<User> {
    return this.prisma.user.update({
      where: { email },
      data: {
        loginAttempts: { increment: 1 },
        updatedAt: this.dateHelper.getCurrentDate(),
      },
      include: { _count: true },
    });
  }

  public async blockUser(email: string): Promise<void> {
    const blockExpires = addHours(new Date(), Constants.HOURS_TO_BLOCK);
    await this.prisma.user.update({
      where: { email },
      data: { blockExpires, updatedAt: this.dateHelper.getCurrentDate() },
    });
  }

  public async updateUserLoginInfo(
    req: Request,
    userId: string,
    tokens: ILoginTokens,
    previousTokensIds: ILoginTokens,
    googleUserId?: string,
  ): Promise<void> {
    const refreshTokenData = await this.authService.createTokenData(
      req,
      tokens.refreshToken,
      TokenType.REFRESH,
    );
    const accessTokenData = await this.authService.createTokenData(
      req,
      tokens.accessToken,
      TokenType.ACCESS,
    );

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        googleUserId,
        loginAttempts: 0,
        active: true,
        lastLogin: this.dateHelper.getCurrentDate(),
        updatedAt: this.dateHelper.getCurrentDate(),
        tokens: {
          connectOrCreate: [
            {
              where: { id: previousTokensIds.refreshToken },
              create: refreshTokenData,
            },
            {
              where: { id: previousTokensIds.accessToken },
              create: accessTokenData,
            },
          ],
          updateMany: [
            {
              where: { id: previousTokensIds.refreshToken },
              data: refreshTokenData,
            },
            {
              where: { id: previousTokensIds.accessToken },
              data: accessTokenData,
            },
          ],
        },
      },
    });
  }

  public async upsertToken(
    req: Request,
    previousTokenId: string,
    token: string,
    tokenType: TokenType,
    userId: string,
  ) {
    const tokenData = await this.authService.createTokenData(
      req,
      token,
      tokenType,
    );

    this.prisma.token.upsert({
      where: { id: previousTokenId },
      update: tokenData,
      create: {
        user: { connect: { id: userId } },
        ...tokenData,
      },
    });
  }

  public async setForgotPasswordFirstUsed(tokenId: string): Promise<Token> {
    try {
      return await this.prisma.token.update({
        where: { id: tokenId },
        data: { firstUsed: true, updatedAt: this.dateHelper.getCurrentDate() },
      });
    } catch (err) {
      throw new UserInputError("Bad request.");
    }
  }

  public async setUserAsVerified(userId: string): Promise<void> {
    const { count } = await this.prisma.user.updateMany({
      where: {
        id: userId,
        isVerified: false,
        verificationExpires: { gt: new Date() },
      },
      data: { isVerified: true, updatedAt: this.dateHelper.getCurrentDate() },
    });

    if (count === 0)
      throw new UserInputError(
        "User does not exists or verification expired or user is already verfied",
      );
  }

  public async deactivateUser(userId: string): Promise<User | null> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { active: false, updatedAt: this.dateHelper.getCurrentDate() },
      include: { _count: true },
    });
  }

  public async deleteUserTokens(userId: string): Promise<void> {
    try {
      await this.prisma.token.deleteMany({
        where: { userId },
      });
    } catch (error) {
      if (error?.code !== PrismaErrors.NotFound) throw new Error(error);
    }
  }

  public async updateProfile(
    userId: string,
    profileInput: ProfileInput,
  ): Promise<Profile> {
    try {
      return await this.prisma.profile.update({
        where: { userId },
        data: { ...profileInput },
      });
    } catch (error) {
      if (error?.code !== PrismaErrors.NotFound) throw new Error(error);
    }
  }

  public async updateProfilePicture(
    userId: string,
    dpUrl: string,
  ): Promise<Profile> {
    try {
      return await this.prisma.profile.update({
        where: { userId },
        data: { dpUrl },
      });
    } catch (error) {
      if (error?.code !== PrismaErrors.NotFound) throw new Error(error);
    }
  }

  public async updateUserInfo(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { id: userId },
        data: {
          username: updateUserInput.username,
          updatedAt: this.dateHelper.getCurrentDate(),
          profile: {
            update: { ...updateUserInput.profile },
          },
        },
        include: { _count: true, profile: true },
      });
    } catch (error) {
      if (error?.code !== PrismaErrors.NotFound) throw new Error(error);
    }
  }

  public async changeUserPassword(
    userId: string,
    newPassword: string,
  ): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { id: userId },
        data: {
          password: newPassword,
          updatedAt: this.dateHelper.getCurrentDate(),
        },
        include: { _count: true },
      });
    } catch (error) {
      if (error?.code !== PrismaErrors.NotFound) throw new Error(error);
    }
  }

  async resetUserPassword(
    resetPasswordInput: ResetPasswordInput,
  ): Promise<User> {
    return this.prisma.user.update({
      where: { email: resetPasswordInput.email },
      data: {
        password: resetPasswordInput.password,
        updatedAt: this.dateHelper.getCurrentDate(),
        tokens: {
          update: {
            where: { id: resetPasswordInput.verificationTokenId },
            data: {
              finalUsed: true,
              updatedAt: this.dateHelper.getCurrentDate(),
            },
          },
        },
      },
      include: { _count: true },
    });
  }
}

export default UserRepository;
