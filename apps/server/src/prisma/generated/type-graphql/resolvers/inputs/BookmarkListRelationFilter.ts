import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkWhereInput } from "../inputs/BookmarkWhereInput";

@TypeGraphQL.InputType("BookmarkListRelationFilter", {
  isAbstract: true,
})
export class BookmarkListRelationFilter {
  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  every?: BookmarkWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  some?: BookmarkWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  none?: BookmarkWhereInput | undefined;
}
