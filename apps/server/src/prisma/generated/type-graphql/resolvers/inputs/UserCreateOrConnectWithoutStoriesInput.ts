import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutStoriesInput } from "../inputs/UserCreateWithoutStoriesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutStoriesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutStoriesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutStoriesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutStoriesInput;
}
