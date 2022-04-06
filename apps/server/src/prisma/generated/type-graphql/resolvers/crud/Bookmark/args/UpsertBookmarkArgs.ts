import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkCreateInput } from "../../../inputs/BookmarkCreateInput";
import { BookmarkUpdateInput } from "../../../inputs/BookmarkUpdateInput";
import { BookmarkWhereUniqueInput } from "../../../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: false,
  })
  where!: BookmarkWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookmarkCreateInput, {
    nullable: false,
  })
  create!: BookmarkCreateInput;

  @TypeGraphQL.Field(_type => BookmarkUpdateInput, {
    nullable: false,
  })
  update!: BookmarkUpdateInput;
}
