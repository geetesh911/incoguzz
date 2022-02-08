import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesWhereInput } from "../../../inputs/CommentRepliesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  where?: CommentRepliesWhereInput | undefined;
}
