import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateManyUserInputEnvelope } from "../inputs/StoryCreateManyUserInputEnvelope";
import { StoryCreateOrConnectWithoutUserInput } from "../inputs/StoryCreateOrConnectWithoutUserInput";
import { StoryCreateWithoutUserInput } from "../inputs/StoryCreateWithoutUserInput";
import { StoryScalarWhereInput } from "../inputs/StoryScalarWhereInput";
import { StoryUpdateManyWithWhereWithoutUserInput } from "../inputs/StoryUpdateManyWithWhereWithoutUserInput";
import { StoryUpdateWithWhereUniqueWithoutUserInput } from "../inputs/StoryUpdateWithWhereUniqueWithoutUserInput";
import { StoryUpsertWithWhereUniqueWithoutUserInput } from "../inputs/StoryUpsertWithWhereUniqueWithoutUserInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class StoryUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [StoryCreateWithoutUserInput], {
    nullable: true,
  })
  create?: StoryCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: StoryCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: StoryUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => StoryCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: StoryCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StoryWhereUniqueInput], {
    nullable: true,
  })
  set?: StoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: StoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryWhereUniqueInput], {
    nullable: true,
  })
  delete?: StoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: StoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: StoryUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: StoryUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: StoryScalarWhereInput[] | undefined;
}
