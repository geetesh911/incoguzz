import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioOrderByWithAggregationInput } from "../../../inputs/AudioOrderByWithAggregationInput";
import { AudioScalarWhereWithAggregatesInput } from "../../../inputs/AudioScalarWhereWithAggregatesInput";
import { AudioWhereInput } from "../../../inputs/AudioWhereInput";
import { AudioScalarFieldEnum } from "../../../../enums/AudioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAudioArgs {
  @TypeGraphQL.Field(_type => AudioWhereInput, {
    nullable: true,
  })
  where?: AudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AudioOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: AudioOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AudioScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "url" | "postId" | "thumbnailUrl">;

  @TypeGraphQL.Field(_type => AudioScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: AudioScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
