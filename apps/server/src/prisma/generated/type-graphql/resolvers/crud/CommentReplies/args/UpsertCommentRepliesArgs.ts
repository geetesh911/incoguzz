import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesCreateInput } from "../../../inputs/CommentRepliesCreateInput";
import { CommentRepliesUpdateInput } from "../../../inputs/CommentRepliesUpdateInput";
import { CommentRepliesWhereUniqueInput } from "../../../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesCreateInput, {
    nullable: false,
  })
  create!: CommentRepliesCreateInput;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateInput, {
    nullable: false,
  })
  update!: CommentRepliesUpdateInput;
}
