import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioUpdateManyMutationInput } from "../../../inputs/ClipAudioUpdateManyMutationInput";
import { ClipAudioWhereInput } from "../../../inputs/ClipAudioWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ClipAudioUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClipAudioWhereInput, {
    nullable: true,
  })
  where?: ClipAudioWhereInput | undefined;
}
