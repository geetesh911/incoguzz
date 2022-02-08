import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CommentRepliesCreateManyInput", {
  isAbstract: true,
})
export class CommentRepliesCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  repliedToId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;
}
