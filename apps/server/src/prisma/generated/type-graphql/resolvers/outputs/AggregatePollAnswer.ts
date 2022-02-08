import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCountAggregate } from "../outputs/PollAnswerCountAggregate";
import { PollAnswerMaxAggregate } from "../outputs/PollAnswerMaxAggregate";
import { PollAnswerMinAggregate } from "../outputs/PollAnswerMinAggregate";

@TypeGraphQL.ObjectType("AggregatePollAnswer", {
  isAbstract: true,
})
export class AggregatePollAnswer {
  @TypeGraphQL.Field(_type => PollAnswerCountAggregate, {
    nullable: true,
  })
  _count!: PollAnswerCountAggregate | null;

  @TypeGraphQL.Field(_type => PollAnswerMinAggregate, {
    nullable: true,
  })
  _min!: PollAnswerMinAggregate | null;

  @TypeGraphQL.Field(_type => PollAnswerMaxAggregate, {
    nullable: true,
  })
  _max!: PollAnswerMaxAggregate | null;
}
