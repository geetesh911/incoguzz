import { Service } from "typedi";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "@/configs";
import { Request } from "express";
import Cryptr from "cryptr";

@Service()
class JWTHelper {
  public generateJwtToken<Type extends string | Buffer | object>(
    dataStoredInToken: Type,
    expiresIn?: string | number | undefined,
  ): string {
    const secretKey: string = config.get("secretKey");

    return jwt.sign(
      dataStoredInToken,
      secretKey,
      expiresIn ? { expiresIn } : {},
    );
  }
  public verifyJwtToken<Type extends JwtPayload | string>(token: string): Type {
    return jwt.verify(token, config.get("secretKey")) as Type;
  }
  public jwtExtractor(request: Request) {
    let token = null;
    if (request.header("x-token")) {
      token = request.get("x-token");
    } else if (request.headers.authorization) {
      token = request.headers.authorization
        .replace("Bearer ", "")
        .replace(" ", "");
    } else if (request.body.token) {
      token = request.body.token.replace(" ", "");
    }
    if (request.query.token) {
      token = request.body.token.replace(" ", "");
    }

    const cryptr = new Cryptr(config.get("cryptrSecretKey"));
    if (token) {
      try {
        token = cryptr.decrypt(token);
      } catch (err) {
        throw new Error("Bad request.");
      }
    }
    return token;
  }
}

export default JWTHelper;
