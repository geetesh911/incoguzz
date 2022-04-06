import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkWhereInput } from "../../../inputs/BookmarkWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  where?: BookmarkWhereInput | undefined;
}
