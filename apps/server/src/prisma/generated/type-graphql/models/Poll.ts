import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PollAnswer } from "../models/PollAnswer";
import { PollOption } from "../models/PollOption";
import { Post } from "../models/Post";
import { PollCount } from "../resolvers/outputs/PollCount";

@TypeGraphQL.ObjectType("Poll", {
  isAbstract: true,
})
export class Poll {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  question!: string;

  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  pollOptions?: PollOption[];

  pollAnswers?: PollAnswer[];

  @TypeGraphQL.Field(_type => PollCount, {
    nullable: true,
  })
  _count?: PollCount | null;
}
