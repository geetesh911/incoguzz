import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateManySourceUserInputEnvelope } from "../inputs/FollowRequestCreateManySourceUserInputEnvelope";
import { FollowRequestCreateOrConnectWithoutSourceUserInput } from "../inputs/FollowRequestCreateOrConnectWithoutSourceUserInput";
import { FollowRequestCreateWithoutSourceUserInput } from "../inputs/FollowRequestCreateWithoutSourceUserInput";
import { FollowRequestScalarWhereInput } from "../inputs/FollowRequestScalarWhereInput";
import { FollowRequestUpdateManyWithWhereWithoutSourceUserInput } from "../inputs/FollowRequestUpdateManyWithWhereWithoutSourceUserInput";
import { FollowRequestUpdateWithWhereUniqueWithoutSourceUserInput } from "../inputs/FollowRequestUpdateWithWhereUniqueWithoutSourceUserInput";
import { FollowRequestUpsertWithWhereUniqueWithoutSourceUserInput } from "../inputs/FollowRequestUpsertWithWhereUniqueWithoutSourceUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType("FollowRequestUpdateManyWithoutSourceUserInput", {
  isAbstract: true,
})
export class FollowRequestUpdateManyWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => [FollowRequestCreateWithoutSourceUserInput], {
    nullable: true,
  })
  create?: FollowRequestCreateWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestCreateOrConnectWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | FollowRequestCreateOrConnectWithoutSourceUserInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestUpsertWithWhereUniqueWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | FollowRequestUpsertWithWhereUniqueWithoutSourceUserInput[]
    | undefined;

  @TypeGraphQL.Field(_type => FollowRequestCreateManySourceUserInputEnvelope, {
    nullable: true,
  })
  createMany?: FollowRequestCreateManySourceUserInputEnvelope | undefined;

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
    _type => [FollowRequestUpdateWithWhereUniqueWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  update?:
    | FollowRequestUpdateWithWhereUniqueWithoutSourceUserInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [FollowRequestUpdateManyWithWhereWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | FollowRequestUpdateManyWithWhereWithoutSourceUserInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: FollowRequestScalarWhereInput[] | undefined;
}
