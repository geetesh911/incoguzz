import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateWithoutPostInput } from "../inputs/BookmarkCreateWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class BookmarkCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateWithoutPostInput, {
    nullable: false,
  })
  create!: BookmarkCreateWithoutPostInput;
}
