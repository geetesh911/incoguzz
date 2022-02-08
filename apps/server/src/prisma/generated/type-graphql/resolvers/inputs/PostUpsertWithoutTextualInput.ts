import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutTextualInput } from "../inputs/PostCreateWithoutTextualInput";
import { PostUpdateWithoutTextualInput } from "../inputs/PostUpdateWithoutTextualInput";

@TypeGraphQL.InputType("PostUpsertWithoutTextualInput", {
  isAbstract: true,
})
export class PostUpsertWithoutTextualInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutTextualInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutTextualInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutTextualInput, {
    nullable: false,
  })
  create!: PostCreateWithoutTextualInput;
}
