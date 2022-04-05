import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBlockedByInput } from "../inputs/UserCreateNestedOneWithoutBlockedByInput";

@TypeGraphQL.InputType("BlockedCreateWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedCreateWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlockedByInput, {
    nullable: false,
  })
  sourceUser!: UserCreateNestedOneWithoutBlockedByInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
