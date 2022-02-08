import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipOrderByWithAggregationInput } from "../../../inputs/ClipOrderByWithAggregationInput";
import { ClipScalarWhereWithAggregatesInput } from "../../../inputs/ClipScalarWhereWithAggregatesInput";
import { ClipWhereInput } from "../../../inputs/ClipWhereInput";
import { ClipScalarFieldEnum } from "../../../../enums/ClipScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClipArgs {
  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  where?: ClipWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClipOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ClipOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "url" | "postId" | "thumbnailUrl" | "clipAudioId">;

  @TypeGraphQL.Field(_type => ClipScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ClipScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
