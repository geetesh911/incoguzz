import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateManyClipAudioInput } from "../inputs/ClipCreateManyClipAudioInput";

@TypeGraphQL.InputType("ClipCreateManyClipAudioInputEnvelope", {
  isAbstract: true,
})
export class ClipCreateManyClipAudioInputEnvelope {
  @TypeGraphQL.Field(_type => [ClipCreateManyClipAudioInput], {
    nullable: false,
  })
  data!: ClipCreateManyClipAudioInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
