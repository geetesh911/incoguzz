import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CommentRepliesMinAggregate", {
  isAbstract: true,
})
export class CommentRepliesMinAggregate {
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
  repliedToId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;
}
