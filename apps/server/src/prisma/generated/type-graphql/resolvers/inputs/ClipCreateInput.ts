import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCreateNestedOneWithoutClipsInput } from "../inputs/ClipAudioCreateNestedOneWithoutClipsInput";
import { PostCreateNestedOneWithoutClipInput } from "../inputs/PostCreateNestedOneWithoutClipInput";

@TypeGraphQL.InputType("ClipCreateInput", {
  isAbstract: true,
})
export class ClipCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutClipInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutClipInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  thumbnailUrl!: string;

  @TypeGraphQL.Field(_type => ClipAudioCreateNestedOneWithoutClipsInput, {
    nullable: false,
  })
  clipAudio!: ClipAudioCreateNestedOneWithoutClipsInput;
}
