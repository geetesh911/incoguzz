import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateWithoutSourceUserInput } from "../inputs/FollowRequestCreateWithoutSourceUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType("FollowRequestCreateOrConnectWithoutSourceUserInput", {
  isAbstract: true,
})
export class FollowRequestCreateOrConnectWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestCreateWithoutSourceUserInput, {
    nullable: false,
  })
  create!: FollowRequestCreateWithoutSourceUserInput;
}
