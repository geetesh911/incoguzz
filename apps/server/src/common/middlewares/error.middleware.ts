import { NextFunction, Request, Response } from "express";
import { Service } from "typedi";
import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { HttpException } from "@/common/exceptions/HttpException";
import { logger } from "@utils/logger";
import { Context } from "@/common/interfaces/context.interface";

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || "Something went wrong";

    logger.error(
      `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`,
    );
    res.status(status).json({ message });
  } catch (err) {
    next(err);
  }
};

@Service()
export class GraphQLErrorLoggerMiddleware
  implements MiddlewareInterface<Context>
{
  async use({ info }: ResolverData<Context>, next: NextFn) {
    try {
      return await next();
    } catch (err) {
      const information = {
        message: err.message,
        operation: info.operation.operation,
        fieldName: info.fieldName,
      };
      logger.debug(information);
      logger.error(err?.code);
      logger.error(err);
      if (err.message.includes("prisma")) {
        return new Error("Internal server error");
      }
      throw err;
    }
  }
}
