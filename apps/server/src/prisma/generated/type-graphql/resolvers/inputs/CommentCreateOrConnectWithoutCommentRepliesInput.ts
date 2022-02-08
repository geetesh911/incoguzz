import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentRepliesInput } from "../inputs/CommentCreateWithoutCommentRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class CommentCreateOrConnectWithoutCommentRepliesInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentRepliesInput, {
    nullable: false,
  })
  create!: CommentCreateWithoutCommentRepliesInput;
}
