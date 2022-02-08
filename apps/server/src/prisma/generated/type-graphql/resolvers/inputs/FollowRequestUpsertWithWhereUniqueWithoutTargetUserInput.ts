import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateWithoutTargetUserInput } from "../inputs/FollowRequestCreateWithoutTargetUserInput";
import { FollowRequestUpdateWithoutTargetUserInput } from "../inputs/FollowRequestUpdateWithoutTargetUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType(
  "FollowRequestUpsertWithWhereUniqueWithoutTargetUserInput",
  {
    isAbstract: true,
  },
)
export class FollowRequestUpsertWithWhereUniqueWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateWithoutTargetUserInput, {
    nullable: false,
  })
  update!: FollowRequestUpdateWithoutTargetUserInput;

  @TypeGraphQL.Field(_type => FollowRequestCreateWithoutTargetUserInput, {
    nullable: false,
  })
  create!: FollowRequestCreateWithoutTargetUserInput;
}
