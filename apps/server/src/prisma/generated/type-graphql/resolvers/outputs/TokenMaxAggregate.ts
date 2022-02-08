import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.ObjectType("TokenMaxAggregate", {
  isAbstract: true,
})
export class TokenMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  token!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  firstUsed!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  finalUsed!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  expires!: Date | null;

  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true,
  })
  type!: "REFRESH" | "ACCESS" | "VERIFICATION" | "FORGOT_PASSWORD" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  ip!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  browser!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
