import { ILoginJwtPayload } from "@/auth/interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export interface Context {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  user?: ILoginJwtPayload;
}

export interface IBuildContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
}
