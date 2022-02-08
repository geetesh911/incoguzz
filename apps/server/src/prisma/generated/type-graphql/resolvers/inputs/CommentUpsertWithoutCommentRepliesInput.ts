import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentRepliesInput } from "../inputs/CommentCreateWithoutCommentRepliesInput";
import { CommentUpdateWithoutCommentRepliesInput } from "../inputs/CommentUpdateWithoutCommentRepliesInput";

@TypeGraphQL.InputType("CommentUpsertWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class CommentUpsertWithoutCommentRepliesInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentRepliesInput, {
    nullable: false,
  })
  update!: CommentUpdateWithoutCommentRepliesInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentRepliesInput, {
    nullable: false,
  })
  create!: CommentCreateWithoutCommentRepliesInput;
}
