import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookmarksInput } from "../inputs/UserCreateOrConnectWithoutBookmarksInput";
import { UserCreateWithoutBookmarksInput } from "../inputs/UserCreateWithoutBookmarksInput";
import { UserUpdateWithoutBookmarksInput } from "../inputs/UserUpdateWithoutBookmarksInput";
import { UserUpsertWithoutBookmarksInput } from "../inputs/UserUpsertWithoutBookmarksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookmarksInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookmarksInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookmarksInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBookmarksInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBookmarksInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutBookmarksInput | undefined;
}
