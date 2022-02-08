import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowingsInput } from "../inputs/UserCreateNestedOneWithoutFollowingsInput";

@TypeGraphQL.InputType("FollowingCreateInput", {
  isAbstract: true,
})
export class FollowingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutFollowingsInput;
}
