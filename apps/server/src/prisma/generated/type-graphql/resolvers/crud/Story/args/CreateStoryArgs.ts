import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryCreateInput } from "../../../inputs/StoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStoryArgs {
  @TypeGraphQL.Field(_type => StoryCreateInput, {
    nullable: false,
  })
  data!: StoryCreateInput;
}
