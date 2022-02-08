import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTokenTypeFilter } from "../inputs/NestedEnumTokenTypeFilter";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.InputType("EnumTokenTypeFilter", {
  isAbstract: true,
})
export class EnumTokenTypeFilter {
  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true,
  })
  equals?:
    | "REFRESH"
    | "ACCESS"
    | "VERIFICATION"
    | "FORGOT_PASSWORD"
    | undefined;

  @TypeGraphQL.Field(_type => [TokenType], {
    nullable: true,
  })
  in?:
    | Array<"REFRESH" | "ACCESS" | "VERIFICATION" | "FORGOT_PASSWORD">
    | undefined;

  @TypeGraphQL.Field(_type => [TokenType], {
    nullable: true,
  })
  notIn?:
    | Array<"REFRESH" | "ACCESS" | "VERIFICATION" | "FORGOT_PASSWORD">
    | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTokenTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumTokenTypeFilter | undefined;
}
