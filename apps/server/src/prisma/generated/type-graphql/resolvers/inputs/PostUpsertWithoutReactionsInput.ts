import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutReactionsInput } from "../inputs/PostCreateWithoutReactionsInput";
import { PostUpdateWithoutReactionsInput } from "../inputs/PostUpdateWithoutReactionsInput";

@TypeGraphQL.InputType("PostUpsertWithoutReactionsInput", {
  isAbstract: true,
})
export class PostUpsertWithoutReactionsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutReactionsInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutReactionsInput;
}
