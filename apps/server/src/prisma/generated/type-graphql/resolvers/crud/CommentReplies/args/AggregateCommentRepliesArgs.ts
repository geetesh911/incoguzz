import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesOrderByWithRelationInput } from "../../../inputs/CommentRepliesOrderByWithRelationInput";
import { CommentRepliesWhereInput } from "../../../inputs/CommentRepliesWhereInput";
import { CommentRepliesWhereUniqueInput } from "../../../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  where?: CommentRepliesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CommentRepliesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CommentRepliesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
