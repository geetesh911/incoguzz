import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateManyUserInputEnvelope } from "../inputs/ActivityCreateManyUserInputEnvelope";
import { ActivityCreateOrConnectWithoutUserInput } from "../inputs/ActivityCreateOrConnectWithoutUserInput";
import { ActivityCreateWithoutUserInput } from "../inputs/ActivityCreateWithoutUserInput";
import { ActivityScalarWhereInput } from "../inputs/ActivityScalarWhereInput";
import { ActivityUpdateManyWithWhereWithoutUserInput } from "../inputs/ActivityUpdateManyWithWhereWithoutUserInput";
import { ActivityUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ActivityUpdateWithWhereUniqueWithoutUserInput";
import { ActivityUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ActivityUpsertWithWhereUniqueWithoutUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class ActivityUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ActivityCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ActivityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ActivityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ActivityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  set?: ActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  delete?: ActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: ActivityUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: ActivityUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActivityScalarWhereInput[] | undefined;
}
