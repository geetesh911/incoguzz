import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountType } from "../../enums/AccountType";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("UserMaxAggregate", {
  isAbstract: true,
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  googleUserId!: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  role!: "USER" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => AccountType, {
    nullable: true,
  })
  accountType!: "PUBLIC" | "ANONYMOUS" | "PRIVATE" | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  isVerified!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  verificationExpires!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  loginAttempts!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  blockExpires!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  active!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  lastLogin!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
