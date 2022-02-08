import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateManyPostInputEnvelope } from "../inputs/ActivityCreateManyPostInputEnvelope";
import { ActivityCreateOrConnectWithoutPostInput } from "../inputs/ActivityCreateOrConnectWithoutPostInput";
import { ActivityCreateWithoutPostInput } from "../inputs/ActivityCreateWithoutPostInput";
import { ActivityScalarWhereInput } from "../inputs/ActivityScalarWhereInput";
import { ActivityUpdateManyWithWhereWithoutPostInput } from "../inputs/ActivityUpdateManyWithWhereWithoutPostInput";
import { ActivityUpdateWithWhereUniqueWithoutPostInput } from "../inputs/ActivityUpdateWithWhereUniqueWithoutPostInput";
import { ActivityUpsertWithWhereUniqueWithoutPostInput } from "../inputs/ActivityUpsertWithWhereUniqueWithoutPostInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityUpdateManyWithoutPostInput", {
  isAbstract: true,
})
export class ActivityUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [ActivityCreateWithoutPostInput], {
    nullable: true,
  })
  create?: ActivityCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: ActivityCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: ActivityUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: ActivityCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ActivityUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: ActivityUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: ActivityUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActivityScalarWhereInput[] | undefined;
}
