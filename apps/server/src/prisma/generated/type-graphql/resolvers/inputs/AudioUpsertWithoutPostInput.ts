import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateWithoutPostInput } from "../inputs/AudioCreateWithoutPostInput";
import { AudioUpdateWithoutPostInput } from "../inputs/AudioUpdateWithoutPostInput";

@TypeGraphQL.InputType("AudioUpsertWithoutPostInput", {
  isAbstract: true,
})
export class AudioUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => AudioUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: AudioUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => AudioCreateWithoutPostInput, {
    nullable: false,
  })
  create!: AudioCreateWithoutPostInput;
}
