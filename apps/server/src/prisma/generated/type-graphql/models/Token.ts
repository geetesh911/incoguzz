import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { TokenType } from "../enums/TokenType";

@TypeGraphQL.ObjectType("Token", {
  isAbstract: true,
})
export class Token {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  token!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  firstUsed!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  finalUsed!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  expires?: Date | null;

  @TypeGraphQL.Field(_type => TokenType, {
    nullable: false,
  })
  type!: "REFRESH" | "ACCESS" | "VERIFICATION" | "FORGOT_PASSWORD";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  ip!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  browser!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  country!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;
}
