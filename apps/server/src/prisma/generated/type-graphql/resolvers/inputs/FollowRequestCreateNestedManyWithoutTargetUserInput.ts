import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateManyTargetUserInputEnvelope } from "../inputs/FollowRequestCreateManyTargetUserInputEnvelope";
import { FollowRequestCreateOrConnectWithoutTargetUserInput } from "../inputs/FollowRequestCreateOrConnectWithoutTargetUserInput";
import { FollowRequestCreateWithoutTargetUserInput } from "../inputs/FollowRequestCreateWithoutTargetUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType("FollowRequestCreateNestedManyWithoutTargetUserInput", {
  isAbstract: true,
})
export class FollowRequestCreateNestedManyWithoutTargetUserInput {
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

  @TypeGraphQL.Field(_type => FollowRequestCreateManyTargetUserInputEnvelope, {
    nullable: true,
  })
  createMany?: FollowRequestCreateManyTargetUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestWhereUniqueInput], {
    nullable: true,
  })
  connect?: FollowRequestWhereUniqueInput[] | undefined;
}
