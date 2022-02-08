import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateWithoutClipAudioInput } from "../inputs/ClipCreateWithoutClipAudioInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipCreateOrConnectWithoutClipAudioInput", {
  isAbstract: true,
})
export class ClipCreateOrConnectWithoutClipAudioInput {
  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipCreateWithoutClipAudioInput, {
    nullable: false,
  })
  create!: ClipCreateWithoutClipAudioInput;
}
