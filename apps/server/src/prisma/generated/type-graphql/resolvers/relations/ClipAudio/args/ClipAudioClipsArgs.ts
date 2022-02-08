import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipOrderByWithRelationInput } from "../../../inputs/ClipOrderByWithRelationInput";
import { ClipWhereInput } from "../../../inputs/ClipWhereInput";
import { ClipWhereUniqueInput } from "../../../inputs/ClipWhereUniqueInput";
import { ClipScalarFieldEnum } from "../../../../enums/ClipScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ClipAudioClipsArgs {
  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  where?: ClipWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClipOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ClipOrderByWithRelationInput[] | undefined;

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
