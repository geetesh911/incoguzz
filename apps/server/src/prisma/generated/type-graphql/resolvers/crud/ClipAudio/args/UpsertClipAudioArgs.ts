import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioCreateInput } from "../../../inputs/ClipAudioCreateInput";
import { ClipAudioUpdateInput } from "../../../inputs/ClipAudioUpdateInput";
import { ClipAudioWhereUniqueInput } from "../../../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipAudioWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipAudioCreateInput, {
    nullable: false,
  })
  create!: ClipAudioCreateInput;

  @TypeGraphQL.Field(_type => ClipAudioUpdateInput, {
    nullable: false,
  })
  update!: ClipAudioUpdateInput;
}
