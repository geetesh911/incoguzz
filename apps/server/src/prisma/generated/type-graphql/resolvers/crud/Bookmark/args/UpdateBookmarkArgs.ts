import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkUpdateInput } from "../../../inputs/BookmarkUpdateInput";
import { BookmarkWhereUniqueInput } from "../../../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkUpdateInput, {
    nullable: false,
  })
  data!: BookmarkUpdateInput;

  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;
}
