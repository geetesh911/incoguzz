import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateManySourceUserInputEnvelope } from "../inputs/FollowRequestCreateManySourceUserInputEnvelope";
import { FollowRequestCreateOrConnectWithoutSourceUserInput } from "../inputs/FollowRequestCreateOrConnectWithoutSourceUserInput";
import { FollowRequestCreateWithoutSourceUserInput } from "../inputs/FollowRequestCreateWithoutSourceUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType("FollowRequestCreateNestedManyWithoutSourceUserInput", {
  isAbstract: true,
})
export class FollowRequestCreateNestedManyWithoutSourceUserInput {
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

  @TypeGraphQL.Field(_type => FollowRequestCreateManySourceUserInputEnvelope, {
    nullable: true,
  })
  createMany?: FollowRequestCreateManySourceUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestWhereUniqueInput], {
    nullable: true,
  })
  connect?: FollowRequestWhereUniqueInput[] | undefined;
}
