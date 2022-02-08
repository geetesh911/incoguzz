import AuthService from "@/auth/auth.service";
import { Service } from "typedi";
import { Context, IBuildContext } from "../interfaces/context.interface";
import PrismaService from "../services/prisma.service";
import JWTHelper from "./jwt.helper";

@Service()
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
