import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkWhereUniqueInput } from "../../../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;
}
