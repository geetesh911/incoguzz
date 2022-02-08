import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Poll } from "../models/Poll";
import { PollAnswer } from "../models/PollAnswer";
import { PollOptionCount } from "../resolvers/outputs/PollOptionCount";

@TypeGraphQL.ObjectType("PollOption", {
  isAbstract: true,
})
export class PollOption {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  option!: string;

  poll?: Poll;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  pollId!: string;

  pollAnswers?: PollAnswer[];

  @TypeGraphQL.Field(_type => PollOptionCount, {
    nullable: true,
  })
  _count?: PollOptionCount | null;
}
