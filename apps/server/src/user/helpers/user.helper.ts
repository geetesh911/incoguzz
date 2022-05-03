import PrismaService from "@/common/services/prisma.service";
import JWTHelper from "@/common/helpers/jwt.helper";
import { ILoginJwtPayload } from "@/auth/interfaces/auth.interface";
import { AuthenticationError } from "apollo-server-errors";
import { User } from "@/prisma/generated/type-graphql";
import { injectable } from "tsyringe";

@injectable()
class UserHelper {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtHelper: JWTHelper,
  ) {}

  async getUser(token: string): Promise<ILoginJwtPayload | undefined> {
    try {
      return this.jwtHelper.verifyJwtToken<ILoginJwtPayload>(token);
    } catch (error) {
      throw new AuthenticationError("User not authenticated");
    }
  }

  isUserVerified(user: User): boolean {
    if (user?.isVerified === false) {
      throw new AuthenticationError("User is not verified");
    }
    return true;
  }
}

export default UserHelper;
