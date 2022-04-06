import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CommentMinAggregate", {
  isAbstract: true,
})
export class CommentMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  comment!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
