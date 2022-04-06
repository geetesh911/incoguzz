import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Bookmark", {
  isAbstract: true,
})
export class Bookmark {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;
}
