import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesWhereUniqueInput } from "../../../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;
}
