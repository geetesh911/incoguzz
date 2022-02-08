import config from "@/configs";
import {
  ILoginJwtPayload,
  IUserVerificationJwtPayload,
} from "@/auth/interfaces/auth.interface";
import { Service } from "typedi";
import Cryptr from "cryptr";
import { getClientIp } from "request-ip";
import { Request } from "express";
import { v4 } from "uuid";
import PrismaService from "@/common/services/prisma.service";
import JWTHelper from "@/common/helpers/jwt.helper";
import {
  TokenCreateWithoutUserInput,
  User,
} from "@/prisma/generated/type-graphql";
import { TokenType } from "@/prisma/generated/type-graphql/enums/TokenType";
import { ILoginTokens } from "@/user/interfaces/login.interface";
import DateHelper from "@/common/helpers/date.helper";

@Service()
class AuthService {
  private cryptr: Cryptr;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtHelper: JWTHelper,
    private readonly dateHelper: DateHelper,
  ) {
    this.cryptr = new Cryptr(config.get("cryptrSecretKey"));
  }

  public async createAccessToken(user: User): Promise<string> {
    const accessToken = this.jwtHelper.generateJwtToken<ILoginJwtPayload>({
      userId: user.id,
      email: user.email,
      role: user.role,
      active: user.active,
    });
    return this.encryptText(accessToken);
  }

  public async createRefreshToken(): Promise<string> {
    return v4();
  }

  public async createTokenData(
    req: Request,
    token: string,
    tokenType: TokenType,
    expires?: Date,
  ): Promise<TokenCreateWithoutUserInput> {
    return {
      token,
      expires,
      ip: this.getIp(req),
      type: TokenType[tokenType],
      browser: this.getBrowserInfo(req),
      country: this.getCountry(req),
      updatedAt: this.dateHelper.getCurrentDate(),
    };
  }

  public async findRefreshToken(tokenString: string): Promise<User> {
    const token = await this.prisma.token.findFirst({
      where: {
        token: tokenString,
      },
      include: { user: { include: { tokens: true, _count: true } } },
    });
    if (!token) {
      throw new Error("User has been logged out.");
    }
    return token.user;
  }

  public async validateUser(
    jwtPayload: IUserVerificationJwtPayload,
  ): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: jwtPayload.userId,
        isVerified: true,
      },
      include: { _count: true },
    });
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  }

  public getPreviousAuthTokensIds(user: User): ILoginTokens {
    return {
      refreshToken:
        user.tokens.find(({ type }) => type === TokenType.REFRESH)?.id || "",
      accessToken:
        user.tokens.find(({ type }) => type === TokenType.ACCESS)?.id || "",
    };
  }

  //   ┬┬ ┬┌┬┐  ┌─┐─┐ ┬┌┬┐┬─┐┌─┐┌─┐┌┬┐┌─┐┬─┐
  //   ││││ │   ├┤ ┌┴┬┘ │ ├┬┘├─┤│   │ │ │├┬┘
  //  └┘└┴┘ ┴   └─┘┴ └─ ┴ ┴└─┴ ┴└─┘ ┴ └─┘┴└─

  // ***********************
  // ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
  // ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
  // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
  // ***********************
  public returnJwtExtractor() {
    return this.jwtHelper.jwtExtractor;
  }

  public getIp(req: Request): string {
    return getClientIp(req) || "XX";
  }

  public getBrowserInfo(req: Request): string {
    return req.header["user-agent"] || "XX";
  }

  public getCountry(req: Request): string {
    return req.header["cf-ipcountry"] ? req.header["cf-ipcountry"] : "XX";
  }

  public encryptText(text: string): string {
    return this.cryptr.encrypt(text);
  }
}

export default AuthService;
