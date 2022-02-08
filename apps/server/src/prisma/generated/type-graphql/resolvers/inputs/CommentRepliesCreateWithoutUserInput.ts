import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutCommentRepliesInput } from "../inputs/CommentCreateNestedOneWithoutCommentRepliesInput";

@TypeGraphQL.InputType("CommentRepliesCreateWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

  @TypeGraphQL.Field(
    _type => CommentCreateNestedOneWithoutCommentRepliesInput,
    {
      nullable: false,
    },
  )
  repliedTo!: CommentCreateNestedOneWithoutCommentRepliesInput;
}
