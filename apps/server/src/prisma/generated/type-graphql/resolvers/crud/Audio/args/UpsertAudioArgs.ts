import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioCreateInput } from "../../../inputs/AudioCreateInput";
import { AudioUpdateInput } from "../../../inputs/AudioUpdateInput";
import { AudioWhereUniqueInput } from "../../../inputs/AudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAudioArgs {
  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: false,
  })
  where!: AudioWhereUniqueInput;

  @TypeGraphQL.Field(_type => AudioCreateInput, {
    nullable: false,
  })
  create!: AudioCreateInput;

  @TypeGraphQL.Field(_type => AudioUpdateInput, {
    nullable: false,
  })
  update!: AudioUpdateInput;
}
