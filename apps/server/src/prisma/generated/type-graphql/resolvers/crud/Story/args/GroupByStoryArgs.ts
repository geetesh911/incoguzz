import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryOrderByWithAggregationInput } from "../../../inputs/StoryOrderByWithAggregationInput";
import { StoryScalarWhereWithAggregatesInput } from "../../../inputs/StoryScalarWhereWithAggregatesInput";
import { StoryWhereInput } from "../../../inputs/StoryWhereInput";
import { StoryScalarFieldEnum } from "../../../../enums/StoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStoryArgs {
  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  where?: StoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StoryOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: StoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "mediaUrl" | "link" | "userId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => StoryScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: StoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
