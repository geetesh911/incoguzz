import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesWhereInput } from "../inputs/CommentRepliesWhereInput";

@TypeGraphQL.InputType("CommentRepliesListRelationFilter", {
  isAbstract: true,
})
export class CommentRepliesListRelationFilter {
  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  every?: CommentRepliesWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  some?: CommentRepliesWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  none?: CommentRepliesWhereInput | undefined;
}
