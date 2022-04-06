import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCountAggregate } from "../outputs/BookmarkCountAggregate";
import { BookmarkMaxAggregate } from "../outputs/BookmarkMaxAggregate";
import { BookmarkMinAggregate } from "../outputs/BookmarkMinAggregate";

@TypeGraphQL.ObjectType("AggregateBookmark", {
  isAbstract: true,
})
export class AggregateBookmark {
  @TypeGraphQL.Field(_type => BookmarkCountAggregate, {
    nullable: true,
  })
  _count!: BookmarkCountAggregate | null;

  @TypeGraphQL.Field(_type => BookmarkMinAggregate, {
    nullable: true,
  })
  _min!: BookmarkMinAggregate | null;

  @TypeGraphQL.Field(_type => BookmarkMaxAggregate, {
    nullable: true,
  })
  _max!: BookmarkMaxAggregate | null;
}
