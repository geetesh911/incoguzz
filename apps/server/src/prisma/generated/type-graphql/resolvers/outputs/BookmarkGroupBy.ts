import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCountAggregate } from "../outputs/BookmarkCountAggregate";
import { BookmarkMaxAggregate } from "../outputs/BookmarkMaxAggregate";
import { BookmarkMinAggregate } from "../outputs/BookmarkMinAggregate";

@TypeGraphQL.ObjectType("BookmarkGroupBy", {
  isAbstract: true,
})
export class BookmarkGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

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
