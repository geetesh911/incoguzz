import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCountAggregate } from "../outputs/TextualCountAggregate";
import { TextualMaxAggregate } from "../outputs/TextualMaxAggregate";
import { TextualMinAggregate } from "../outputs/TextualMinAggregate";

@TypeGraphQL.ObjectType("AggregateTextual", {
  isAbstract: true,
})
export class AggregateTextual {
  @TypeGraphQL.Field(_type => TextualCountAggregate, {
    nullable: true,
  })
  _count!: TextualCountAggregate | null;

  @TypeGraphQL.Field(_type => TextualMinAggregate, {
    nullable: true,
  })
  _min!: TextualMinAggregate | null;

  @TypeGraphQL.Field(_type => TextualMaxAggregate, {
    nullable: true,
  })
  _max!: TextualMaxAggregate | null;
}
