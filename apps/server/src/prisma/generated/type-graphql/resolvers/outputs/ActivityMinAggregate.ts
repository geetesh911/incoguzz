import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.ObjectType("ActivityMinAggregate", {
  isAbstract: true,
})
export class ActivityMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: true,
  })
  type!:
    | "REACTED"
    | "COMMENTED"
    | "POSTED"
    | "SHARED"
    | "VIEWED"
    | "BOOKMARKED"
    | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
