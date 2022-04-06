import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateWithoutUserInput } from "../inputs/BookmarkUpdateWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class BookmarkUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: BookmarkUpdateWithoutUserInput;
}
