import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountType } from "../../enums/AccountType";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateManyInput", {
  isAbstract: true,
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  googleUserId?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => AccountType, {
    nullable: true,
  })
  accountType?: "PUBLIC" | "ANONYMOUS" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  isVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  verificationExpires?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  loginAttempts?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  blockExpires?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  lastLogin?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
