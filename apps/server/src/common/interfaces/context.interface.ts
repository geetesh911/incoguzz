import { ILoginJwtPayload } from "@/auth/interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { PubSub } from "graphql-subscriptions";
import { Context as SubscriptionContext } from "graphql-ws/lib/server";
import { Extra } from "graphql-ws/lib/use/ws";

export interface Context {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  user?: ILoginJwtPayload;
  pubSub: PubSub;
}

export interface IBuildContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  pubSub: PubSub;
}

export type ISubscriptionContext = SubscriptionContext<
  {
    authorization: string;
  },
  Extra
> & {
  isAuthenticated: boolean;
  user?: ILoginJwtPayload;
  pubSub: PubSub;
};
