import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutUserInput } from "../inputs/ReactionCreateWithoutUserInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class ReactionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false,
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ReactionCreateWithoutUserInput;
}
