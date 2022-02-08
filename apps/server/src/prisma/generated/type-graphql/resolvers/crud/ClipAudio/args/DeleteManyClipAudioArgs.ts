import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioWhereInput } from "../../../inputs/ClipAudioWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioWhereInput, {
    nullable: true,
  })
  where?: ClipAudioWhereInput | undefined;
}
