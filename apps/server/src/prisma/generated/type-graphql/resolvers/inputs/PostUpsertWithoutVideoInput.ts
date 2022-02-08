import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutVideoInput } from "../inputs/PostCreateWithoutVideoInput";
import { PostUpdateWithoutVideoInput } from "../inputs/PostUpdateWithoutVideoInput";

@TypeGraphQL.InputType("PostUpsertWithoutVideoInput", {
  isAbstract: true,
})
export class PostUpsertWithoutVideoInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutVideoInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutVideoInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutVideoInput, {
    nullable: false,
  })
  create!: PostCreateWithoutVideoInput;
}
