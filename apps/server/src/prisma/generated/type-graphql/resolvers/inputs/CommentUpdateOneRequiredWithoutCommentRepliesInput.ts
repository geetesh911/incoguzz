import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutCommentRepliesInput } from "../inputs/CommentCreateOrConnectWithoutCommentRepliesInput";
import { CommentCreateWithoutCommentRepliesInput } from "../inputs/CommentCreateWithoutCommentRepliesInput";
import { CommentUpdateWithoutCommentRepliesInput } from "../inputs/CommentUpdateWithoutCommentRepliesInput";
import { CommentUpsertWithoutCommentRepliesInput } from "../inputs/CommentUpsertWithoutCommentRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneRequiredWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class CommentUpdateOneRequiredWithoutCommentRepliesInput {
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

  @TypeGraphQL.Field(_type => CommentUpsertWithoutCommentRepliesInput, {
    nullable: true,
  })
  upsert?: CommentUpsertWithoutCommentRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true,
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentRepliesInput, {
    nullable: true,
  })
  update?: CommentUpdateWithoutCommentRepliesInput | undefined;
}
