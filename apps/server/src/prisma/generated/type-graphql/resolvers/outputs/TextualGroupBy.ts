import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCountAggregate } from "../outputs/TextualCountAggregate";
import { TextualMaxAggregate } from "../outputs/TextualMaxAggregate";
import { TextualMinAggregate } from "../outputs/TextualMinAggregate";

@TypeGraphQL.ObjectType("TextualGroupBy", {
  isAbstract: true,
})
export class TextualGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  text!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

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
