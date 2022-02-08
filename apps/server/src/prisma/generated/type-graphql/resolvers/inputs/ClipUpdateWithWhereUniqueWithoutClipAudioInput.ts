import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipUpdateWithoutClipAudioInput } from "../inputs/ClipUpdateWithoutClipAudioInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipUpdateWithWhereUniqueWithoutClipAudioInput", {
  isAbstract: true,
})
export class ClipUpdateWithWhereUniqueWithoutClipAudioInput {
  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipUpdateWithoutClipAudioInput, {
    nullable: false,
  })
  data!: ClipUpdateWithoutClipAudioInput;
}
