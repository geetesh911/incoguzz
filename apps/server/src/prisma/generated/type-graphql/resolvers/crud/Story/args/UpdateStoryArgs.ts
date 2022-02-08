import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryUpdateInput } from "../../../inputs/StoryUpdateInput";
import { StoryWhereUniqueInput } from "../../../inputs/StoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStoryArgs {
  @TypeGraphQL.Field(_type => StoryUpdateInput, {
    nullable: false,
  })
  data!: StoryUpdateInput;

  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;
}
