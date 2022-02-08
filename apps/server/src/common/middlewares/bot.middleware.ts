import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { Service } from "typedi";
import { Context } from "../interfaces/context.interface";
import isbot from "isbot";

@Service()
export class BotMiddleware implements MiddlewareInterface<Context> {
  async use({ context }: ResolverData<Context>, next: NextFn) {
    const isBot = isbot(context.req.headers["user-agent"]);

    if (isBot) {
      // throw new Error("Bot Detected");
    }
    return next();
  }
}
