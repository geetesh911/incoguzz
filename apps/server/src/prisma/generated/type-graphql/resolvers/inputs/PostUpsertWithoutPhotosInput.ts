import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPhotosInput } from "../inputs/PostCreateWithoutPhotosInput";
import { PostUpdateWithoutPhotosInput } from "../inputs/PostUpdateWithoutPhotosInput";

@TypeGraphQL.InputType("PostUpsertWithoutPhotosInput", {
  isAbstract: true,
})
export class PostUpsertWithoutPhotosInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutPhotosInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutPhotosInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPhotosInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPhotosInput;
}
