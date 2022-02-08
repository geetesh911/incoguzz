import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesUpdateManyMutationInput } from "../../../inputs/CommentRepliesUpdateManyMutationInput";
import { CommentRepliesWhereInput } from "../../../inputs/CommentRepliesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CommentRepliesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  where?: CommentRepliesWhereInput | undefined;
}
