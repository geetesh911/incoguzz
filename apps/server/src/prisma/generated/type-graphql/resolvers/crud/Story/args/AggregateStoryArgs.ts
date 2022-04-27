import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StoryOrderByWithRelationAndSearchRelevanceInput";
import { StoryWhereInput } from "../../../inputs/StoryWhereInput";
import { StoryWhereUniqueInput } from "../../../inputs/StoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStoryArgs {
  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  where?: StoryWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [StoryOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: StoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: true,
  })
  cursor?: StoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
