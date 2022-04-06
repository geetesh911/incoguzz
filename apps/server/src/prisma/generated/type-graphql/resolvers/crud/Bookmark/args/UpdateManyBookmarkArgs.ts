import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkUpdateManyMutationInput } from "../../../inputs/BookmarkUpdateManyMutationInput";
import { BookmarkWhereInput } from "../../../inputs/BookmarkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BookmarkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  where?: BookmarkWhereInput | undefined;
}
