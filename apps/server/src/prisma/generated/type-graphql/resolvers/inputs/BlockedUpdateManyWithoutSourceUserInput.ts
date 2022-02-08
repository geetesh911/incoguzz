import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateManySourceUserInputEnvelope } from "../inputs/BlockedCreateManySourceUserInputEnvelope";
import { BlockedCreateOrConnectWithoutSourceUserInput } from "../inputs/BlockedCreateOrConnectWithoutSourceUserInput";
import { BlockedCreateWithoutSourceUserInput } from "../inputs/BlockedCreateWithoutSourceUserInput";
import { BlockedScalarWhereInput } from "../inputs/BlockedScalarWhereInput";
import { BlockedUpdateManyWithWhereWithoutSourceUserInput } from "../inputs/BlockedUpdateManyWithWhereWithoutSourceUserInput";
import { BlockedUpdateWithWhereUniqueWithoutSourceUserInput } from "../inputs/BlockedUpdateWithWhereUniqueWithoutSourceUserInput";
import { BlockedUpsertWithWhereUniqueWithoutSourceUserInput } from "../inputs/BlockedUpsertWithWhereUniqueWithoutSourceUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedUpdateManyWithoutSourceUserInput", {
  isAbstract: true,
})
export class BlockedUpdateManyWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => [BlockedCreateWithoutSourceUserInput], {
    nullable: true,
  })
  create?: BlockedCreateWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedCreateOrConnectWithoutSourceUserInput], {
    nullable: true,
  })
  connectOrCreate?: BlockedCreateOrConnectWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [BlockedUpsertWithWhereUniqueWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  upsert?: BlockedUpsertWithWhereUniqueWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BlockedCreateManySourceUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BlockedCreateManySourceUserInputEnvelope | undefined;

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
    _type => [BlockedUpdateWithWhereUniqueWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  update?: BlockedUpdateWithWhereUniqueWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [BlockedUpdateManyWithWhereWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: BlockedUpdateManyWithWhereWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: BlockedScalarWhereInput[] | undefined;
}
