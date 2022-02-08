import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateManyTargetUserInputEnvelope } from "../inputs/BlockedCreateManyTargetUserInputEnvelope";
import { BlockedCreateOrConnectWithoutTargetUserInput } from "../inputs/BlockedCreateOrConnectWithoutTargetUserInput";
import { BlockedCreateWithoutTargetUserInput } from "../inputs/BlockedCreateWithoutTargetUserInput";
import { BlockedScalarWhereInput } from "../inputs/BlockedScalarWhereInput";
import { BlockedUpdateManyWithWhereWithoutTargetUserInput } from "../inputs/BlockedUpdateManyWithWhereWithoutTargetUserInput";
import { BlockedUpdateWithWhereUniqueWithoutTargetUserInput } from "../inputs/BlockedUpdateWithWhereUniqueWithoutTargetUserInput";
import { BlockedUpsertWithWhereUniqueWithoutTargetUserInput } from "../inputs/BlockedUpsertWithWhereUniqueWithoutTargetUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedUpdateManyWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedUpdateManyWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => [BlockedCreateWithoutTargetUserInput], {
    nullable: true,
  })
  create?: BlockedCreateWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedCreateOrConnectWithoutTargetUserInput], {
    nullable: true,
  })
  connectOrCreate?: BlockedCreateOrConnectWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [BlockedUpsertWithWhereUniqueWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  upsert?: BlockedUpsertWithWhereUniqueWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BlockedCreateManyTargetUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BlockedCreateManyTargetUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlockedWhereUniqueInput], {
    nullable: true,
  })
  set?: BlockedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: BlockedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedWhereUniqueInput], {
    nullable: true,
  })
  delete?: BlockedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedWhereUniqueInput], {
    nullable: true,
  })
  connect?: BlockedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [BlockedUpdateWithWhereUniqueWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  update?: BlockedUpdateWithWhereUniqueWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [BlockedUpdateManyWithWhereWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: BlockedUpdateManyWithWhereWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: BlockedScalarWhereInput[] | undefined;
}
