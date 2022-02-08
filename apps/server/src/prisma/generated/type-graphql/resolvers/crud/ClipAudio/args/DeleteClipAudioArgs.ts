import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioWhereUniqueInput } from "../../../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipAudioWhereUniqueInput;
}
