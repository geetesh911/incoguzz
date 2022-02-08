import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBlockedInput } from "../inputs/UserCreateNestedOneWithoutBlockedInput";

@TypeGraphQL.InputType("BlockedCreateWithoutSourceUserInput", {
  isAbstract: true,
})
export class BlockedCreateWithoutSourceUserInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlockedInput, {
    nullable: false,
  })
  targetUser!: UserCreateNestedOneWithoutBlockedInput;
}
