import { GraphQLErrorLoggerMiddleware } from "@/common/middlewares/error.middleware";
import { TypegooseMiddleware } from "@/common/middlewares/typegoose.middleware";
import { ObjectIdScalar } from "@/common/scalers/object-id.scaler";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import { ObjectId } from "mongodb";
import { AuthResolver } from "./auth.resolver";
import { User } from "../prisma/generated/type-graphql";
import { container } from "tsyringe";

const authSchema = buildSchemaSync({
  resolvers: [AuthResolver],
  emitSchemaFile: path.join(__dirname, "auth.schema.gql"),
  orphanedTypes: [User],
  // use document converting middleware
  globalMiddlewares: [GraphQLErrorLoggerMiddleware, TypegooseMiddleware],
  // use ObjectId scalar mapping
  scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
  container: {
    get(someClass) {
      return container.resolve(someClass);
    },
  },
});

export default authSchema;
