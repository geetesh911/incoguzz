import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyUserInputEnvelope } from "../inputs/ReactionCreateManyUserInputEnvelope";
import { ReactionCreateOrConnectWithoutUserInput } from "../inputs/ReactionCreateOrConnectWithoutUserInput";
import { ReactionCreateWithoutUserInput } from "../inputs/ReactionCreateWithoutUserInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionUpdateManyWithWhereWithoutUserInput";
import { ReactionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutUserInput";
import { ReactionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutUserInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class ReactionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ReactionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ReactionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true,
  })
  set?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true,
  })
  delete?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true,
  })
  connect?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: ReactionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: ReactionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ReactionScalarWhereInput[] | undefined;
}
