import { Resolver, Arg, Mutation, Ctx } from "type-graphql";
import UserService from "@/user/user.service";
import { Context } from "@/common/interfaces/context.interface";
import { LoginInput } from "@/user/inputs/login.input";
import { LoginOutput } from "@/user/outputs/login.output";
import { User } from "@/prisma/generated/type-graphql";
import PrismaService from "@/common/services/prisma.service";
import { injectable } from "tsyringe";

@injectable()
@Resolver(() => User)
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => LoginOutput)
  async login(
    @Arg("loginInput") loginInput: LoginInput,
    @Ctx() context: Context,
  ) {
    return this.userService.login(context.req, loginInput);
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() context: Context) {
    return this.userService.logout(context.req);
  }
}
