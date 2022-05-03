import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";
import { SignUpInput } from "@/user/inputs/signup.input";
import GoogleStrategy from "@/auth/strategies/google.strategy";
import UserService from "@/user/user.service";
import { Context } from "@/common/interfaces/context.interface";
import { ForgotPasswordInput } from "@/user/inputs/forgot-password.input";
import { ForgotPasswordOutput } from "@/user/outputs/forgot-password.output";
import { ResetPasswordInput } from "@/user/inputs/reset-password.input";
import { getRequestBody } from "@/common/helpers/requestBody.helper";
import { GoogleAuthOutput } from "./outputs/google-auth.output";
import { User } from "../prisma/generated/type-graphql";
import { SignUpOutput } from "./outputs/signup.output";
import { GoogleAuthInput } from "./inputs/google-signup.input";
import { logger } from "@/utils/logger";
import { Authorized } from "@/auth/decorators/auth-checker.decorator";
import { UserOutput } from "./outputs/user.output";
import { ProfileInput } from "./inputs/profile.input";
import { ProfileOutput } from "./outputs/profile.output";
import { UpdateUserInput } from "./inputs/update-user.input";
import { UpdateUserOutput } from "./outputs/update-user.output";
import { ChangePasswordInput } from "./inputs/change-password.input";
import PrismaService from "@/common/services/prisma.service";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { AzureContainersEnum } from "./enums/file.enum";
import StorageService from "@/common/services/storage.service";
import CloudinaryStorageService from "@/common/services/cloudinary-storage.service";
import AzureStorageService from "@/common/services/azure-storage.service";
import { injectable } from "tsyringe";

@injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly googleStrategy: GoogleStrategy,
    private readonly userService: UserService,
    private readonly cloudinaryStorageService: CloudinaryStorageService,
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
    private readonly azureStorageService: AzureStorageService,
  ) {}

  @Authorized()
  @Query(() => String)
  async test() {
    await this.prisma.user.deleteMany({});
    await this.prisma.tag.deleteMany({});
    return "tested";
  }

  @Authorized()
  @Mutation(() => Boolean)
  async singleUpload(
    @Arg("picture", () => GraphQLUpload)
    picture: FileUpload,
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      await this.storageService.uploadFile(picture, {
        containerName: AzureContainersEnum.profile,
        onCompletion: async uploadResponse => {
          console.log(uploadResponse[0].metadata);
          resolve(true);
        },
        onError: async () => reject(false),
      });
    });
  }

  @Mutation(() => Boolean)
  async multipleUploadFile(
    @Arg("picture", () => [GraphQLUpload])
    files: Promise<FileUpload>[],
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      await this.storageService.uploadFiles(files, {
        containerName: AzureContainersEnum.profile,
        onCompletion: async () => resolve(true),
        onError: async () => reject(false),
      });
    });
  }

  @Query(() => String)
  async getMediaAccessToken(): Promise<string> {
    return this.azureStorageService.generateQueryParams();
  }

  @Authorized()
  @Mutation(() => Boolean)
  async changeProfilePicture(
    @Ctx() { user }: Context,
    @Arg("picture", () => GraphQLUpload)
    picture: FileUpload,
  ): Promise<boolean> {
    return this.userService.updateProfilePicture(user, picture);
  }

  @Authorized()
  @Mutation(() => Boolean)
  async removeProfilePicture(@Ctx() { user }: Context): Promise<boolean> {
    await this.userService.removeProfilePicture(user);
    return true;
  }

  @Authorized()
  @Query(() => UserOutput, { nullable: true })
  async getUser(@Ctx() { user }: Context) {
    return this.userService.getUser(user?.email);
  }

  @Query(() => Boolean, { nullable: true })
  async isUsernameAvailable(@Arg("username") username: string) {
    return this.userService.isUsernameAvailable(username);
  }

  @Query(() => Boolean, { nullable: true })
  async verifyAccessToken(
    @Arg("accessToken") accessToken: string,
    @Ctx() { req }: Context,
  ) {
    return this.userService.verifyAccessToken(req, accessToken);
  }

  @Mutation(() => Boolean, { nullable: true })
  async verifyUserEmail(@Arg("verificationToken") verificationToken: string) {
    return this.userService.verifyUserEmail(verificationToken);
  }

  @Mutation(() => SignUpOutput)
  async signUp(@Arg("signUpInput") signUpInput: SignUpInput) {
    return this.userService.create(signUpInput);
  }

  @Mutation(() => GoogleAuthOutput)
  async googleAuth(
    @Arg("googleAuthInput") googleAuthInput: GoogleAuthInput,
    @Ctx() { req, res }: Context,
  ) {
    req.body = getRequestBody(req.body, {
      access_token: googleAuthInput.googleAccessToken,
    });

    const { data, info } = await this.googleStrategy.authenticateGoogle(
      req,
      res,
    );

    if (info?.code === "ETIMEDOUT") {
      return new Error("Failed to reach Google: Try Again");
    } else if (info) {
      logger.info(info);
      return new Error("Something went wrong");
    }

    return this.userService.googleAuthentication(req, data);
  }

  @Mutation(() => ForgotPasswordOutput)
  async forgotPassword(
    @Arg("forgotPasswordInput") forgotPasswordInput: ForgotPasswordInput,
    @Ctx() context: Context,
  ) {
    return this.userService.forgotPassword(context.req, forgotPasswordInput);
  }

  @Mutation(() => ForgotPasswordOutput, { nullable: true })
  async verifyForgotPassword(
    @Arg("verificationToken") verificationToken: string,
  ) {
    return this.userService.forgotPasswordVerify(verificationToken);
  }

  @Mutation(() => ForgotPasswordOutput)
  async resetPassword(
    @Arg("resetPasswordInput") resetPasswordInput: ResetPasswordInput,
  ) {
    return this.userService.resetPassword(resetPasswordInput);
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deactivateUser(@Ctx() { req, user }: Context) {
    return this.userService.deactivateUser(req, user);
  }

  @Authorized()
  @Mutation(() => ProfileOutput)
  async updateProfile(
    @Arg("profileInput") profileInput: ProfileInput,
    @Ctx() { user }: Context,
  ) {
    return this.userService.updateProfile(user?.userId, profileInput);
  }

  @Authorized()
  @Mutation(() => UpdateUserOutput)
  async updateUser(
    @Arg("updateUserInput") updateUserInput: UpdateUserInput,
    @Ctx() { user }: Context,
  ) {
    return this.userService.updateUserInfo(user?.userId, updateUserInput);
  }

  @Authorized()
  @Mutation(() => Boolean)
  async changePassword(
    @Arg("changePasswordInput") changePasswordInput: ChangePasswordInput,
    @Ctx() { user }: Context,
  ) {
    return this.userService.changeUserPassword(
      user?.email,
      changePasswordInput,
    );
  }
}
