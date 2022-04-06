import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.ObjectType("ReactionMinAggregate", {
  isAbstract: true,
})
export class ReactionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: true,
  })
  reaction!: "LIKE" | "LAUGH" | "COOL" | "FIRE" | "CELEBRATE" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
