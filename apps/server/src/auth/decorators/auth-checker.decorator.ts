import { createMethodDecorator } from "type-graphql";
import Container from "typedi";
import { Context } from "@/common/interfaces/context.interface";
import UserHelper from "@/user/helpers/user.helper";
import { AuthenticationError } from "apollo-server-errors";
import JWTHelper from "@/common/helpers/jwt.helper";

const userHelper = Container.get(UserHelper);
const jwtHelper = Container.get(JWTHelper);

export function Authorized(roles: string[] = []) {
  return createMethodDecorator<Context>(async ({ context }, next) => {
    const { req } = context;
    let isAuthenticated = false;

    const jwtToken = jwtHelper.jwtExtractor(req);

    const user = await userHelper.getUser(jwtToken);

    context.user = user;

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

    if (isAuthenticated) return next();

    // no roles matched, restrict access
    throw new AuthenticationError("User not authenticated");
  });
}
