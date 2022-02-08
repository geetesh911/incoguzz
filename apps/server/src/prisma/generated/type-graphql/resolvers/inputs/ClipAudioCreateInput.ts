import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateNestedManyWithoutClipAudioInput } from "../inputs/ClipCreateNestedManyWithoutClipAudioInput";

@TypeGraphQL.InputType("ClipAudioCreateInput", {
  isAbstract: true,
})
export class ClipAudioCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  audioUrl!: string;

  @TypeGraphQL.Field(_type => ClipCreateNestedManyWithoutClipAudioInput, {
    nullable: true,
  })
  clips?: ClipCreateNestedManyWithoutClipAudioInput | undefined;
}
