import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("CommentReplies", {
  isAbstract: true,
})
export class CommentReplies {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

  repliedTo?: Comment;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  repliedToId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;
}
