import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/FollowRequestOrderByWithRelationAndSearchRelevanceInput";
import { FollowRequestWhereInput } from "../../../inputs/FollowRequestWhereInput";
import { FollowRequestWhereUniqueInput } from "../../../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  where?: FollowRequestWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?:
    | FollowRequestOrderByWithRelationAndSearchRelevanceInput[]
    | undefined;

  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: true,
  })
  cursor?: FollowRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
