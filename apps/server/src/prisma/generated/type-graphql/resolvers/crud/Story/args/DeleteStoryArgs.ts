import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryWhereUniqueInput } from "../../../inputs/StoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStoryArgs {
  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;
}
