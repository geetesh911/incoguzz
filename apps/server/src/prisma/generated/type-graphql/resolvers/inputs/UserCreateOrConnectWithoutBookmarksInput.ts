import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookmarksInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBookmarksInput;
}
