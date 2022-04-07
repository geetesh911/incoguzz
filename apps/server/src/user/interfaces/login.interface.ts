import { Request } from "express";

export interface ILoginTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUpdateUserLoginInfoPramas {
  req: Request;
  userId: string;
  tokens: ILoginTokens;
  previousTokensIds: ILoginTokens;
  googleUserId: string;
}
