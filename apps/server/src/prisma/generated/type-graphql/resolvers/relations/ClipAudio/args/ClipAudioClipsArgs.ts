import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ClipOrderByWithRelationAndSearchRelevanceInput";
import { ClipWhereInput } from "../../../inputs/ClipWhereInput";
import { ClipWhereUniqueInput } from "../../../inputs/ClipWhereUniqueInput";
import { ClipScalarFieldEnum } from "../../../../enums/ClipScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ClipAudioClipsArgs {
  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  where?: ClipWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [ClipOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: ClipOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ClipWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "url" | "postId" | "thumbnailUrl" | "clipAudioId">
    | undefined;
}
