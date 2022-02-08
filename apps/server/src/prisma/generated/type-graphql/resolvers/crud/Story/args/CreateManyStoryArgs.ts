import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryCreateManyInput } from "../../../inputs/StoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStoryArgs {
  @TypeGraphQL.Field(_type => [StoryCreateManyInput], {
    nullable: false,
  })
  data!: StoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
