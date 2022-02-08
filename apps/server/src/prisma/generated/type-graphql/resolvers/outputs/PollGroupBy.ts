import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCountAggregate } from "../outputs/PollCountAggregate";
import { PollMaxAggregate } from "../outputs/PollMaxAggregate";
import { PollMinAggregate } from "../outputs/PollMinAggregate";

@TypeGraphQL.ObjectType("PollGroupBy", {
  isAbstract: true,
})
export class PollGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  question!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => PollCountAggregate, {
    nullable: true,
  })
  _count!: PollCountAggregate | null;

  @TypeGraphQL.Field(_type => PollMinAggregate, {
    nullable: true,
  })
  _min!: PollMinAggregate | null;

  @TypeGraphQL.Field(_type => PollMaxAggregate, {
    nullable: true,
  })
  _max!: PollMaxAggregate | null;
}
