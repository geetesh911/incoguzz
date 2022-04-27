import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VideoOrderByWithRelationAndSearchRelevanceInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true,
  })
  where?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [VideoOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: VideoOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true,
  })
  cursor?: VideoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
