import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioCreateInput } from "../../../inputs/ClipAudioCreateInput";

@TypeGraphQL.ArgsType()
export class CreateClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioCreateInput, {
    nullable: false,
  })
  data!: ClipAudioCreateInput;
}
