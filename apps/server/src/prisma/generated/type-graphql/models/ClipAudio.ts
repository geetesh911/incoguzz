import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Clip } from "../models/Clip";
import { ClipAudioCount } from "../resolvers/outputs/ClipAudioCount";

@TypeGraphQL.ObjectType("ClipAudio", {
  isAbstract: true,
})
export class ClipAudio {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  audioUrl!: string;

  clips?: Clip[];

  @TypeGraphQL.Field(_type => ClipAudioCount, {
    nullable: true,
  })
  _count?: ClipAudioCount | null;
}
