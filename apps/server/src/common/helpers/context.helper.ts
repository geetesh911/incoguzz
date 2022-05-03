import AuthService from "@/auth/auth.service";
import { injectable } from "tsyringe";
import { Context, IBuildContext } from "../interfaces/context.interface";
import PrismaService from "../services/prisma.service";
import JWTHelper from "./jwt.helper";

@injectable()
class ContextHelper {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
    private readonly jwtHelper: JWTHelper,
  ) {}

  async buildContext(context: IBuildContext): Promise<Context> {
    return context;
  }
}
export default ContextHelper;
