import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutStoriesInput } from "../inputs/UserCreateWithoutStoriesInput";
import { UserUpdateWithoutStoriesInput } from "../inputs/UserUpdateWithoutStoriesInput";

@TypeGraphQL.InputType("UserUpsertWithoutStoriesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutStoriesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutStoriesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutStoriesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutStoriesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutStoriesInput;
}
