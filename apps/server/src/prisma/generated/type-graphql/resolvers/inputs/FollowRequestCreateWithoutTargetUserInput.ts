import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSentFollowRequestsInput } from "../inputs/UserCreateNestedOneWithoutSentFollowRequestsInput";

@TypeGraphQL.InputType("FollowRequestCreateWithoutTargetUserInput", {
  isAbstract: true,
})
export class FollowRequestCreateWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message?: string | undefined;

  @TypeGraphQL.Field(
    _type => UserCreateNestedOneWithoutSentFollowRequestsInput,
    {
      nullable: false,
    },
  )
  sourceUser!: UserCreateNestedOneWithoutSentFollowRequestsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
