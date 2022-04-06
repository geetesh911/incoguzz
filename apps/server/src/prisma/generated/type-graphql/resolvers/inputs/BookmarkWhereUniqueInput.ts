import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkPostIdUserIdCompoundUniqueInput } from "../inputs/BookmarkPostIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("BookmarkWhereUniqueInput", {
  isAbstract: true,
})
export class BookmarkWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => BookmarkPostIdUserIdCompoundUniqueInput, {
    nullable: true,
  })
  postId_userId?: BookmarkPostIdUserIdCompoundUniqueInput | undefined;
}
