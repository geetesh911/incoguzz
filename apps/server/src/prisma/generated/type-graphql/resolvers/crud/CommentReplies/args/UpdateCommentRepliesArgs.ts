import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesUpdateInput } from "../../../inputs/CommentRepliesUpdateInput";
import { CommentRepliesWhereUniqueInput } from "../../../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesUpdateInput, {
    nullable: false,
  })
  data!: CommentRepliesUpdateInput;

  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;
}
