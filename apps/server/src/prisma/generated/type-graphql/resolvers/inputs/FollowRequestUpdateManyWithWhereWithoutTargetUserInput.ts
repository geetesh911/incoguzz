import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestScalarWhereInput } from "../inputs/FollowRequestScalarWhereInput";
import { FollowRequestUpdateManyMutationInput } from "../inputs/FollowRequestUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "FollowRequestUpdateManyWithWhereWithoutTargetUserInput",
  {
    isAbstract: true,
  },
)
export class FollowRequestUpdateManyWithWhereWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => FollowRequestScalarWhereInput, {
    nullable: false,
  })
  where!: FollowRequestScalarWhereInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateManyMutationInput, {
    nullable: false,
  })
  data!: FollowRequestUpdateManyMutationInput;
}
