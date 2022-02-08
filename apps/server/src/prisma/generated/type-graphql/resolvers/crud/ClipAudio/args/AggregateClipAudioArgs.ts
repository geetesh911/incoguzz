import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioOrderByWithRelationInput } from "../../../inputs/ClipAudioOrderByWithRelationInput";
import { ClipAudioWhereInput } from "../../../inputs/ClipAudioWhereInput";
import { ClipAudioWhereUniqueInput } from "../../../inputs/ClipAudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateClipAudioArgs {
  @TypeGraphQL.Field(_type => ClipAudioWhereInput, {
    nullable: true,
  })
  where?: ClipAudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClipAudioOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ClipAudioOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClipAudioWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ClipAudioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
