import { createMethodDecorator } from "type-graphql";
import { Context } from "@/common/interfaces/context.interface";
import UserHelper from "@/user/helpers/user.helper";
import { AuthenticationError } from "apollo-server-errors";
import JWTHelper from "@/common/helpers/jwt.helper";
import { container } from "tsyringe";
import {
  ISubscriptionRequest,
  IUserAuthenticationData,
} from "../interfaces/auth.interface";
import { Request } from "express";

const userHelper = container.resolve(UserHelper);
const jwtHelper = container.resolve(JWTHelper);

export async function userIsAuthenticated(
  req: Request | ISubscriptionRequest,
  roles: string[] = [],
): Promise<IUserAuthenticationData> {
  let isAuthenticated = false;

  const jwtToken = jwtHelper.jwtExtractor(req);

  const user = await userHelper.getUser(jwtToken);

  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    isAuthenticated = user !== undefined;
  }

  // there are some roles defined now
  if (!user) {
    // and if no user, restrict access
    isAuthenticated = false;
  } else if (roles.includes(user.role)) {
    // grant access if the roles overlap
    isAuthenticated = true;
  }

  return { isAuthenticated, user };
}

export function Authorized(roles: string[] = []) {
  return createMethodDecorator<Context>(async ({ context }, next) => {
    const { req } = context;

    const { isAuthenticated, user } = await userIsAuthenticated(req, roles);

    context.user = user;

    if (isAuthenticated) return next();

    // no roles matched, restrict access
    throw new AuthenticationError("User not authenticated");
  });
}
