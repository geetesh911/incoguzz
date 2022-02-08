import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCountAggregate } from "../outputs/TokenCountAggregate";
import { TokenMaxAggregate } from "../outputs/TokenMaxAggregate";
import { TokenMinAggregate } from "../outputs/TokenMinAggregate";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.ObjectType("TokenGroupBy", {
  isAbstract: true,
})
export class TokenGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

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
  expires!: Date | null;

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

  @TypeGraphQL.Field(_type => TokenCountAggregate, {
    nullable: true,
  })
  _count!: TokenCountAggregate | null;

  @TypeGraphQL.Field(_type => TokenMinAggregate, {
    nullable: true,
  })
  _min!: TokenMinAggregate | null;

  @TypeGraphQL.Field(_type => TokenMaxAggregate, {
    nullable: true,
  })
  _max!: TokenMaxAggregate | null;
}
