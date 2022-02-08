import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateNestedManyWithoutRepliedToInput } from "../inputs/CommentRepliesCreateNestedManyWithoutRepliedToInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("CommentCreateInput", {
  isAbstract: true,
})
export class CommentCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(
    _type => CommentRepliesCreateNestedManyWithoutRepliedToInput,
    {
      nullable: true,
    },
  )
  commentReplies?:
    | CommentRepliesCreateNestedManyWithoutRepliedToInput
    | undefined;
}
