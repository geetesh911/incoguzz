import { User } from "@/prisma/generated/type-graphql";
import { Request } from "express";
import { Extra } from "graphql-ws/lib/use/ws";
import { ObjectId } from "mongodb";

export interface DataStoredInToken {
  _id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
}

export interface IUserVerificationJwtPayload {
  userId: string;
  email: string;
}

export interface IResetPasswordJwtPayload {
  verificationTokenId: string;
  verificationUuid: string;
  email: string;
  userId: string;
}

export interface ILoginJwtPayload {
  userId: string;
  email: string;
  active: boolean;
  role: User["role"];
}

export interface IUserVerificationData {
  email: string;
  userId: ObjectId;
}

export interface IUserAuthenticationData {
  isAuthenticated: boolean;
  user: ILoginJwtPayload;
}

export type ISubscriptionRequest = Partial<Extra["request"]> & {
  header?: (key: string) => string;
  get?: (key: string) => string;
  body?: { token: string };
  query?: { token: string };
  headers?: { [key: string]: string };
};
