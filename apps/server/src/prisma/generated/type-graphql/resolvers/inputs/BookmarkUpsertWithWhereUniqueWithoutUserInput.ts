import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutUserInput } from "../inputs/BookmarkCreateWithoutUserInput";
import { BookmarkUpdateWithoutUserInput } from "../inputs/BookmarkUpdateWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class BookmarkUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: BookmarkUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutUserInput, {
    nullable: false,
  })
  create!: BookmarkCreateWithoutUserInput;
}
