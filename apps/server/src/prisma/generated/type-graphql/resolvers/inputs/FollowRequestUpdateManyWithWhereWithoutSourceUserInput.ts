import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestScalarWhereInput } from "../inputs/FollowRequestScalarWhereInput";
import { FollowRequestUpdateManyMutationInput } from "../inputs/FollowRequestUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "FollowRequestUpdateManyWithWhereWithoutSourceUserInput",
  {
    isAbstract: true,
  },
)
export class FollowRequestUpdateManyWithWhereWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => FollowRequestScalarWhereInput, {
    nullable: false,
  })
  where!: FollowRequestScalarWhereInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateManyMutationInput, {
    nullable: false,
  })
  data!: FollowRequestUpdateManyMutationInput;
}
