import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType("Photo", {
  isAbstract: true,
})
export class Photo {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;
}
