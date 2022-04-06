import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutPostInput } from "../inputs/BookmarkCreateWithoutPostInput";
import { BookmarkUpdateWithoutPostInput } from "../inputs/BookmarkUpdateWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class BookmarkUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: BookmarkUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutPostInput, {
    nullable: false,
  })
  create!: BookmarkCreateWithoutPostInput;
}
