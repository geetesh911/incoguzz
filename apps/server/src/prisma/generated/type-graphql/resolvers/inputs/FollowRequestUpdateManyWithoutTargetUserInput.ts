import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateManyTargetUserInputEnvelope } from "../inputs/FollowRequestCreateManyTargetUserInputEnvelope";
import { FollowRequestCreateOrConnectWithoutTargetUserInput } from "../inputs/FollowRequestCreateOrConnectWithoutTargetUserInput";
import { FollowRequestCreateWithoutTargetUserInput } from "../inputs/FollowRequestCreateWithoutTargetUserInput";
import { FollowRequestScalarWhereInput } from "../inputs/FollowRequestScalarWhereInput";
import { FollowRequestUpdateManyWithWhereWithoutTargetUserInput } from "../inputs/FollowRequestUpdateManyWithWhereWithoutTargetUserInput";
import { FollowRequestUpdateWithWhereUniqueWithoutTargetUserInput } from "../inputs/FollowRequestUpdateWithWhereUniqueWithoutTargetUserInput";
import { FollowRequestUpsertWithWhereUniqueWithoutTargetUserInput } from "../inputs/FollowRequestUpsertWithWhereUniqueWithoutTargetUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType("FollowRequestUpdateManyWithoutTargetUserInput", {
  isAbstract: true,
})
export class FollowRequestUpdateManyWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => [FollowRequestCreateWithoutTargetUserInput], {
    nullable: true,
  })
  create?: FollowRequestCreateWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestCreateOrConnectWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | FollowRequestCreateOrConnectWithoutTargetUserInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestUpsertWithWhereUniqueWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | FollowRequestUpsertWithWhereUniqueWithoutTargetUserInput[]
    | undefined;

  @TypeGraphQL.Field(_type => FollowRequestCreateManyTargetUserInputEnvelope, {
    nullable: true,
  })
  createMany?: FollowRequestCreateManyTargetUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestWhereUniqueInput], {
    nullable: true,
  })
  set?: FollowRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: FollowRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestWhereUniqueInput], {
    nullable: true,
  })
  delete?: FollowRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestWhereUniqueInput], {
    nullable: true,
  })
  connect?: FollowRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestUpdateWithWhereUniqueWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  update?:
    | FollowRequestUpdateWithWhereUniqueWithoutTargetUserInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestUpdateManyWithWhereWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | FollowRequestUpdateManyWithWhereWithoutTargetUserInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: FollowRequestScalarWhereInput[] | undefined;
}
