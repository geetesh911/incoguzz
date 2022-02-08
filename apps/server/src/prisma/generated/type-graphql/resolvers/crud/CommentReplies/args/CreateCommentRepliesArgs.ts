import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesCreateInput } from "../../../inputs/CommentRepliesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesCreateInput, {
    nullable: false,
  })
  data!: CommentRepliesCreateInput;
}
