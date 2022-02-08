import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FollowRequestMaxAggregate", {
  isAbstract: true,
})
export class FollowRequestMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  sourceUserId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  targetUserId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
