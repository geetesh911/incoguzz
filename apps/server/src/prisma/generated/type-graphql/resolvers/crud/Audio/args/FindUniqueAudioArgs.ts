import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioWhereUniqueInput } from "../../../inputs/AudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAudioArgs {
  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: false,
  })
  where!: AudioWhereUniqueInput;
}
