import passport from "passport";
import { Strategy as GoogleTokenStrategy } from "passport-google-token";
import config from "@/configs";
import { Service } from "typedi";
import { Request, Response } from "express";
import {
  IGoogleAuthResponse,
  IGoogleUserData,
  IProfile,
} from "../interfaces/google.interface";

@Service()
class GoogleStrategy {
  private GoogleTokenStrategyCallback(
    accessToken: string,
    refreshToken: string,
    profile: IProfile,
    done,
  ): void {
    done(null, {
      accessToken,
      refreshToken,
      profile,
    });
  }

  public init() {
    passport.use(
      new GoogleTokenStrategy(
        {
          clientID: config.get("googleConfig.GOOGLE_CLIENT_ID"),
          clientSecret: config.get("googleConfig.GOOGLE_CLIENT_SECRET"),
        },
        this.GoogleTokenStrategyCallback,
      ),
    );
  }
  public authenticateGoogle = (
    req: Request,
    res: Response,
  ): Promise<IGoogleAuthResponse<IGoogleUserData, any>> =>
    new Promise((resolve, reject) => {
      passport.authenticate(
        "google-token",
        { session: false },
        (err, data, info) => {
          if (err) reject(err);
          resolve({ data, info });
        },
      )(req, res);
    });
}

export default GoogleStrategy;
