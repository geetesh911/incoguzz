import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VideoOrderByWithRelationAndSearchRelevanceInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
import { VideoScalarFieldEnum } from "../../../../enums/VideoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVideoArgs {
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

  @TypeGraphQL.Field(_type => [VideoScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "thumbnailUrl" | "url" | "postId"> | undefined;
}
