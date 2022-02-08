import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutStoriesInput } from "../inputs/UserCreateOrConnectWithoutStoriesInput";
import { UserCreateWithoutStoriesInput } from "../inputs/UserCreateWithoutStoriesInput";
import { UserUpdateWithoutStoriesInput } from "../inputs/UserUpdateWithoutStoriesInput";
import { UserUpsertWithoutStoriesInput } from "../inputs/UserUpsertWithoutStoriesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutStoriesInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutStoriesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutStoriesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutStoriesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutStoriesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutStoriesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutStoriesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutStoriesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutStoriesInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutStoriesInput | undefined;
}
