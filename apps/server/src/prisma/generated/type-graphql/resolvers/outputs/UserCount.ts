import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserCount", {
  isAbstract: true,
})
export class UserCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  tokens!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  reactions!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  bookmarks!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  comments!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  followers!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  followings!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  sentFollowRequests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  receivedFollowRequests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  sentMessages!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  receivedMessages!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  stories!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  activities!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  blockedBy!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  blocked!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  pollAnswers!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  commentReplies!: number;
}
