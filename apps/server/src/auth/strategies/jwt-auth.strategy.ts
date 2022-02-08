import passportJWT, { VerifyCallback } from "passport-jwt";
import passport from "passport";
import config from "@/configs";
import { logger } from "@/utils/logger";

class JWTStrategy {
  private static JWTStrategyCallback: VerifyCallback = (jwtPayload, done) => {
    try {
      done(null, { jwtPayload });
    } catch (error) {
      done(error, { jwtPayload });
      logger.error("error", error);
    }
  };
  public static init() {
    const ExtractJWT = passportJWT.ExtractJwt;
    const PassportJWTStrategy = passportJWT.Strategy;

    passport.use(
      new PassportJWTStrategy(
        {
          jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
          secretOrKey: config.get("secretKey"),
        },
        this.JWTStrategyCallback,
      ),
    );
  }
  public static authenticateJwt = (req, res) =>
    new Promise((resolve, reject) => {
      try {
        passport.authenticate("jwt", { session: false }, (err, data, info) => {
          if (err) reject(err);
          resolve({ data, info });
        })(req, res);
      } catch (err) {
        logger.error(err);
      }
    });
}

export default JWTStrategy;
