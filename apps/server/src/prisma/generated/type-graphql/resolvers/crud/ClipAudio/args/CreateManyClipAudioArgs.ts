import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipAudioCreateManyInput } from "../../../inputs/ClipAudioCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyClipAudioArgs {
  @TypeGraphQL.Field(_type => [ClipAudioCreateManyInput], {
    nullable: false,
  })
  data!: ClipAudioCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
