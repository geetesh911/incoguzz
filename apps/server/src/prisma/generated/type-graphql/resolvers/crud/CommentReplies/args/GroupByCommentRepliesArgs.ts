import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesOrderByWithAggregationInput } from "../../../inputs/CommentRepliesOrderByWithAggregationInput";
import { CommentRepliesScalarWhereWithAggregatesInput } from "../../../inputs/CommentRepliesScalarWhereWithAggregatesInput";
import { CommentRepliesWhereInput } from "../../../inputs/CommentRepliesWhereInput";
import { CommentRepliesScalarFieldEnum } from "../../../../enums/CommentRepliesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  where?: CommentRepliesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: CommentRepliesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "comment" | "repliedToId" | "userId">;

  @TypeGraphQL.Field(_type => CommentRepliesScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: CommentRepliesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
