import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutClipInput } from "../inputs/PostCreateWithoutClipInput";
import { PostUpdateWithoutClipInput } from "../inputs/PostUpdateWithoutClipInput";

@TypeGraphQL.InputType("PostUpsertWithoutClipInput", {
  isAbstract: true,
})
export class PostUpsertWithoutClipInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutClipInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutClipInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutClipInput, {
    nullable: false,
  })
  create!: PostCreateWithoutClipInput;
}
