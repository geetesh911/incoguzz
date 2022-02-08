import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutCommentRepliesInput } from "../inputs/CommentCreateNestedOneWithoutCommentRepliesInput";
import { UserCreateNestedOneWithoutCommentRepliesInput } from "../inputs/UserCreateNestedOneWithoutCommentRepliesInput";

@TypeGraphQL.InputType("CommentRepliesCreateInput", {
  isAbstract: true,
})
export class CommentRepliesCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentRepliesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutCommentRepliesInput;
}
