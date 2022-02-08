import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioUpdateInput } from "../../../inputs/ClipAudioUpdateInput";
import { ClipAudioWhereUniqueInput } from "../../../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioUpdateInput, {
    nullable: false,
  })
  data!: ClipAudioUpdateInput;

  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipAudioWhereUniqueInput;
}
