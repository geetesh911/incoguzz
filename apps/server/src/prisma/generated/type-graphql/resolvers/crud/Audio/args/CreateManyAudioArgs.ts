import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioCreateManyInput } from "../../../inputs/AudioCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAudioArgs {
  @TypeGraphQL.Field(_type => [AudioCreateManyInput], {
    nullable: false,
  })
  data!: AudioCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
