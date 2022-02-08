import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("FollowRequest", {
  isAbstract: true,
})
export class FollowRequest {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message?: string | null;

  sourceUser?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  sourceUserId!: string;

  targetUser?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  targetUserId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;
}
