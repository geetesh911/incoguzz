import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryUpdateManyMutationInput } from "../../../inputs/StoryUpdateManyMutationInput";
import { StoryWhereInput } from "../../../inputs/StoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStoryArgs {
  @TypeGraphQL.Field(_type => StoryUpdateManyMutationInput, {
    nullable: false,
  })
  data!: StoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  where?: StoryWhereInput | undefined;
}
