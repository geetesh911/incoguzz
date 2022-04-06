import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutUserInput } from "../inputs/BookmarkCreateWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class BookmarkCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutUserInput, {
    nullable: false,
  })
  create!: BookmarkCreateWithoutUserInput;
}
