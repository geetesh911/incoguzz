import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";
import bcrypt from "bcrypt";
import { logger } from "@/utils/logger";

@Service()
class PrismaService extends PrismaClient {
  constructor() {
    super({ log: ["query", "info", "warn", "error"] });
    this.hashPassword();
    this.timeLogging();
  }
  private async hashPassword() {
    this.$use(async (params, next) => {
      const actions = ["create", "createMany", "update", "updateMany"];

      if (actions.includes(params.action) && params.model == "User") {
        const user = params.args.data;

        if (!user.password) return next(params);

        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;

        params.args.data = user;
      }
      return next(params);
    });
  }
  private async timeLogging() {
    this.$use(async (params, next) => {
      const before = Date.now();

      const result = await next(params);

      const after = Date.now();

      logger.info(
        `Query ${params.model}.${params.action} took ${after - before}ms`,
      );

      return result;
    });
  }
}
export default PrismaService;
