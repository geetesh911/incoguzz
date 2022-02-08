import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestUpdateWithoutTargetUserInput } from "../inputs/FollowRequestUpdateWithoutTargetUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType(
  "FollowRequestUpdateWithWhereUniqueWithoutTargetUserInput",
  {
    isAbstract: true,
  },
)
export class FollowRequestUpdateWithWhereUniqueWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateWithoutTargetUserInput, {
    nullable: false,
  })
  data!: FollowRequestUpdateWithoutTargetUserInput;
}
