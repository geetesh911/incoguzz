import config from "@/configs";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { HttpException } from "@/common/exceptions/HttpException";
import {
  DataStoredInToken,
  RequestWithUser,
} from "@/auth/interfaces/auth.interface";
import userModel from "@models/users.model";

const authMiddleware = async (
  req: RequestWithUser,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const Authorization =
      req?.cookies?.["Authorization"] ||
      req?.header("Authorization")?.split("Bearer ")[1] ||
      null;

    if (Authorization) {
      const secretKey: string = config.get("secretKey");
      const verificationResponse = jwt.verify(
        Authorization,
        secretKey,
      ) as DataStoredInToken;
      const userId = verificationResponse._id;
      const findUser = await userModel.findById(userId).exec();

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, "Wrong authentication token"));
      }
    } else {
      next(new HttpException(404, "Authentication token missing"));
    }
  } catch (error) {
    next(new HttpException(401, "Wrong authentication token"));
  }
};

export default authMiddleware;
