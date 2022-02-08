import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioUpdateManyMutationInput } from "../../../inputs/AudioUpdateManyMutationInput";
import { AudioWhereInput } from "../../../inputs/AudioWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAudioArgs {
  @TypeGraphQL.Field(_type => AudioUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AudioUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AudioWhereInput, {
    nullable: true,
  })
  where?: AudioWhereInput | undefined;
}
