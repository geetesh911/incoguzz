import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CommentReplies } from "../models/CommentReplies";
import { Post } from "../models/Post";
import { User } from "../models/User";
import { CommentCount } from "../resolvers/outputs/CommentCount";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true,
})
export class Comment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

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

  commentReplies?: CommentReplies[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CommentCount, {
    nullable: true,
  })
  _count?: CommentCount | null;
}
