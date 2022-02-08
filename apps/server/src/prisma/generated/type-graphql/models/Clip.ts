import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ClipAudio } from "../models/ClipAudio";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType("Clip", {
  isAbstract: true,
})
export class Clip {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  thumbnailUrl!: string;

  clipAudio?: ClipAudio;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  clipAudioId!: string;
}
