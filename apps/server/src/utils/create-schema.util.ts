import { TypegooseMiddleware } from "@/common/middlewares/typegoose.middleware";
import { GraphQLErrorLoggerMiddleware } from "@/common/middlewares/error.middleware";
import { UserResolver } from "@/user/user.resolver";
import { PostResolver } from "@/post/post.resolver";
import { buildSchema } from "type-graphql";
import { AuthResolver } from "@/auth/auth.resolver";
import path from "path";
import { BotMiddleware } from "@/common/middlewares/bot.middleware";
import { container } from "tsyringe";

export const createSchema = async () =>
  buildSchema({
    resolvers: [UserResolver, AuthResolver, PostResolver],
    emitSchemaFile: path.join(__dirname, "../schema.gql"),
    // use document converting middleware
    globalMiddlewares: [
      GraphQLErrorLoggerMiddleware,
      BotMiddleware,
      TypegooseMiddleware,
    ],
    // use ObjectId scalar mapping
    scalarsMap: [],
    container: {
      get(someClass) {
        return container.resolve(someClass);
      },
    },
  });
