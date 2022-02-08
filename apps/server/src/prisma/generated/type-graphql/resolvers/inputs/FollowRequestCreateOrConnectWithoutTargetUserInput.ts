import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateWithoutTargetUserInput } from "../inputs/FollowRequestCreateWithoutTargetUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType("FollowRequestCreateOrConnectWithoutTargetUserInput", {
  isAbstract: true,
})
export class FollowRequestCreateOrConnectWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestCreateWithoutTargetUserInput, {
    nullable: false,
  })
  create!: FollowRequestCreateWithoutTargetUserInput;
}
