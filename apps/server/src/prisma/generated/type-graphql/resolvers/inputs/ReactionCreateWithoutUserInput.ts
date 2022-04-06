import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.InputType("ReactionCreateWithoutUserInput", {
  isAbstract: true,
})
export class ReactionCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutReactionsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutReactionsInput;

  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: false,
  })
  reaction!: "LIKE" | "LAUGH" | "COOL" | "FIRE" | "CELEBRATE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
