import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioUpdateInput } from "../../../inputs/AudioUpdateInput";
import { AudioWhereUniqueInput } from "../../../inputs/AudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAudioArgs {
  @TypeGraphQL.Field(_type => AudioUpdateInput, {
    nullable: false,
  })
  data!: AudioUpdateInput;

  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: false,
  })
  where!: AudioWhereUniqueInput;
}
