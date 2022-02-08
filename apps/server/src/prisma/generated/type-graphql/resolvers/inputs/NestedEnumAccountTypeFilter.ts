import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountType } from "../../enums/AccountType";

@TypeGraphQL.InputType("NestedEnumAccountTypeFilter", {
  isAbstract: true,
})
export class NestedEnumAccountTypeFilter {
  @TypeGraphQL.Field(_type => AccountType, {
    nullable: true,
  })
  equals?: "PUBLIC" | "ANONYMOUS" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => [AccountType], {
    nullable: true,
  })
  in?: Array<"PUBLIC" | "ANONYMOUS" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => [AccountType], {
    nullable: true,
  })
  notIn?: Array<"PUBLIC" | "ANONYMOUS" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumAccountTypeFilter | undefined;
}
