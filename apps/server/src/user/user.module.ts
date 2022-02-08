import { GraphQLErrorLoggerMiddleware } from "@/common/middlewares/error.middleware";
import { TypegooseMiddleware } from "@/common/middlewares/typegoose.middleware";
import { ObjectIdScalar } from "@/common/scalers/object-id.scaler";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import Container from "typedi";
import { ObjectId } from "mongodb";
import { UserResolver } from "./user.resolver";
import { User } from "../prisma/generated/type-graphql";

const userSchema = buildSchemaSync({
  resolvers: [UserResolver],
  emitSchemaFile: path.join(__dirname, "user.schema.gql"),
  orphanedTypes: [User],
  // use document converting middleware
  globalMiddlewares: [GraphQLErrorLoggerMiddleware, TypegooseMiddleware],
  // use ObjectId scalar mapping
  scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
  container: Container,
});

export default userSchema;
