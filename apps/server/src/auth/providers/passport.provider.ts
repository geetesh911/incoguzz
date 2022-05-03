import passport from "passport";
import { Application } from "express";
import { logger } from "@utils/logger";
import LocalStrategy from "@/auth/strategies/local-auth.strategy";
import JWTStrategy from "@/auth/strategies/jwt-auth.strategy";
import GoogleStrategy from "@/auth/strategies/google.strategy";
import PrismaService from "@/common/services/prisma.service";
import { container, injectable } from "tsyringe";

@injectable()
class Passport {
  private readonly localStrategy = container.resolve(LocalStrategy);
  private readonly googleStrategy = container.resolve(GoogleStrategy);
  private readonly prisma = container.resolve(PrismaService);

  private initializeStrategies() {
    try {
      this.localStrategy.init();
      JWTStrategy.init();
      this.googleStrategy.init();
    } catch (err) {
      logger.error(err);
    }
  }

  public initializePassport(_express: Application): Application {
    _express = _express.use(passport.initialize());

    passport.serializeUser<any, any>((_req, user, done) => {
      done(null, user);
    });

    passport.deserializeUser<any, any>(async (id, done) => {
      try {
        const user = await this.prisma.user.findUnique({ where: { id } });
        done(null, user);
      } catch (error) {
        done(error);
      }
    });

    this.initializeStrategies();

    return _express;
  }
}

export default Passport;
