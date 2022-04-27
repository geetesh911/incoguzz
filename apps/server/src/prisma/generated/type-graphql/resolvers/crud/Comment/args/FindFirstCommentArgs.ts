import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CommentOrderByWithRelationAndSearchRelevanceInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";
import { CommentScalarFieldEnum } from "../../../../enums/CommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCommentArgs {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true,
  })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [CommentOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: CommentOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "comment" | "postId" | "userId" | "createdAt" | "updatedAt">
    | undefined;
}
