import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioOrderByWithAggregationInput } from "../../../inputs/ClipAudioOrderByWithAggregationInput";
import { ClipAudioScalarWhereWithAggregatesInput } from "../../../inputs/ClipAudioScalarWhereWithAggregatesInput";
import { ClipAudioWhereInput } from "../../../inputs/ClipAudioWhereInput";
import { ClipAudioScalarFieldEnum } from "../../../../enums/ClipAudioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioWhereInput, {
    nullable: true,
  })
  where?: ClipAudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ClipAudioOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "audioUrl">;

  @TypeGraphQL.Field(_type => ClipAudioScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ClipAudioScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
