import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutCommentRepliesInput } from "../inputs/CommentCreateOrConnectWithoutCommentRepliesInput";
import { CommentCreateWithoutCommentRepliesInput } from "../inputs/CommentCreateWithoutCommentRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class CommentCreateNestedOneWithoutCommentRepliesInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentRepliesInput, {
    nullable: true,
  })
  create?: CommentCreateWithoutCommentRepliesInput | undefined;

  @TypeGraphQL.Field(
    _type => CommentCreateOrConnectWithoutCommentRepliesInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | CommentCreateOrConnectWithoutCommentRepliesInput
    | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true,
  })
  connect?: CommentWhereUniqueInput | undefined;
}
