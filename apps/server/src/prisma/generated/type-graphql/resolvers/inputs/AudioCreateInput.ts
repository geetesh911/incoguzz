import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutAudioInput } from "../inputs/PostCreateNestedOneWithoutAudioInput";

@TypeGraphQL.InputType("AudioCreateInput", {
  isAbstract: true,
})
export class AudioCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  thumbnailUrl?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutAudioInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutAudioInput;
}
