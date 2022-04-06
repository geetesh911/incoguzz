import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkUpdateWithoutPostInput } from "../inputs/BookmarkUpdateWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class BookmarkUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: BookmarkUpdateWithoutPostInput;
}
