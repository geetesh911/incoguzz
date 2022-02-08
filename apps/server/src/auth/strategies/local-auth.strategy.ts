import passportLocal, { VerifyFunction } from "passport-local";
import { logger } from "@/utils/logger";
import passport from "passport";
import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
class LocalStrategy {
  private LocalStrategyCallback: VerifyFunction = (email, password, done) => {
    try {
      done(null, { email, password });
    } catch (error) {
      done(error, { email, password });
      logger.error("error", error);
    }
  };
  public init() {
    const PassportLocalStrategy = passportLocal.Strategy;

    passport.use(
      new PassportLocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        this.LocalStrategyCallback,
      ),
    );
  }
  public authenticateLocal = (req: Request, res: Response) =>
    new Promise((resolve, reject) => {
      passport.authenticate("local", { session: false }, (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      })(req, res);
    });
}

export default LocalStrategy;
