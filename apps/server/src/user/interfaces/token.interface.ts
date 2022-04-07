import { Request } from "express";
import { TokenType } from "@/prisma/generated/type-graphql/enums/TokenType";

export interface IUpsertTokenParams {
  req: Request;
  previousTokenId: string;
  token: string;
  tokenType: TokenType;
  userId: string;
}
