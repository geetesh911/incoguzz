import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryCreateInput } from "../../../inputs/StoryCreateInput";
import { StoryUpdateInput } from "../../../inputs/StoryUpdateInput";
import { StoryWhereUniqueInput } from "../../../inputs/StoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStoryArgs {
  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoryCreateInput, {
    nullable: false,
  })
  create!: StoryCreateInput;

  @TypeGraphQL.Field(_type => StoryUpdateInput, {
    nullable: false,
  })
  update!: StoryUpdateInput;
}
