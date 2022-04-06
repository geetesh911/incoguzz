import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutUserInput } from "../inputs/ReactionCreateWithoutUserInput";
import { ReactionUpdateWithoutUserInput } from "../inputs/ReactionUpdateWithoutUserInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ReactionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false,
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ReactionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ReactionCreateWithoutUserInput;
}
