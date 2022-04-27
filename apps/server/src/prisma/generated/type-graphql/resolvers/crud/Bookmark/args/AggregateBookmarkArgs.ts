import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/BookmarkOrderByWithRelationAndSearchRelevanceInput";
import { BookmarkWhereInput } from "../../../inputs/BookmarkWhereInput";
import { BookmarkWhereUniqueInput } from "../../../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookmarkArgs {
  @TypeGraphQL.Field(_type => BookmarkWhereInput, {
    nullable: true,
  })
  where?: BookmarkWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [BookmarkOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: BookmarkOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkWhereUniqueInput, {
    nullable: true,
  })
  cursor?: BookmarkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
