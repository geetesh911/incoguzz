import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutMessageInput } from "../inputs/PostCreateWithoutMessageInput";
import { PostUpdateWithoutMessageInput } from "../inputs/PostUpdateWithoutMessageInput";

@TypeGraphQL.InputType("PostUpsertWithoutMessageInput", {
  isAbstract: true,
})
export class PostUpsertWithoutMessageInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutMessageInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutMessageInput, {
    nullable: false,
  })
  create!: PostCreateWithoutMessageInput;
}
