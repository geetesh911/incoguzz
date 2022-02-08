import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryWhereInput } from "../../../inputs/StoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStoryArgs {
  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  where?: StoryWhereInput | undefined;
}
