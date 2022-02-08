import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutAudioInput } from "../inputs/PostCreateWithoutAudioInput";
import { PostUpdateWithoutAudioInput } from "../inputs/PostUpdateWithoutAudioInput";

@TypeGraphQL.InputType("PostUpsertWithoutAudioInput", {
  isAbstract: true,
})
export class PostUpsertWithoutAudioInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutAudioInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutAudioInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutAudioInput, {
    nullable: false,
  })
  create!: PostCreateWithoutAudioInput;
}
