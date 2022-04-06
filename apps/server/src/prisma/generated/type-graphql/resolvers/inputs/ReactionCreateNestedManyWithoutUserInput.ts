import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyUserInputEnvelope } from "../inputs/ReactionCreateManyUserInputEnvelope";
import { ReactionCreateOrConnectWithoutUserInput } from "../inputs/ReactionCreateOrConnectWithoutUserInput";
import { ReactionCreateWithoutUserInput } from "../inputs/ReactionCreateWithoutUserInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class ReactionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ReactionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ReactionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true,
  })
  connect?: ReactionWhereUniqueInput[] | undefined;
}
