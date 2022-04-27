import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CommentRepliesOrderByWithRelationAndSearchRelevanceInput";
import { CommentRepliesWhereInput } from "../../../inputs/CommentRepliesWhereInput";
import { CommentRepliesWhereUniqueInput } from "../../../inputs/CommentRepliesWhereUniqueInput";
import { CommentRepliesScalarFieldEnum } from "../../../../enums/CommentRepliesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CommentCommentRepliesArgs {
  @TypeGraphQL.Field(_type => CommentRepliesWhereInput, {
    nullable: true,
  })
  where?: CommentRepliesWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?:
    | CommentRepliesOrderByWithRelationAndSearchRelevanceInput[]
    | undefined;

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

  @TypeGraphQL.Field(_type => [CommentRepliesScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        "id" | "comment" | "repliedToId" | "userId" | "createdAt" | "updatedAt"
      >
    | undefined;
}
