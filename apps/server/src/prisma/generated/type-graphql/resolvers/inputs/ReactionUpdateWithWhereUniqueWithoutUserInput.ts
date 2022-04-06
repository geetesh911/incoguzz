import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionUpdateWithoutUserInput } from "../inputs/ReactionUpdateWithoutUserInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ReactionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false,
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ReactionUpdateWithoutUserInput;
}
