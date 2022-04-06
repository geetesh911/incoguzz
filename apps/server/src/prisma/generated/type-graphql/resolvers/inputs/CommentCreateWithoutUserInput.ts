import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateNestedManyWithoutRepliedToInput } from "../inputs/CommentRepliesCreateNestedManyWithoutRepliedToInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("CommentCreateWithoutUserInput", {
  isAbstract: true,
})
export class CommentCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(
    _type => CommentRepliesCreateNestedManyWithoutRepliedToInput,
    {
      nullable: true,
    },
  )
  commentReplies?:
    | CommentRepliesCreateNestedManyWithoutRepliedToInput
    | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
