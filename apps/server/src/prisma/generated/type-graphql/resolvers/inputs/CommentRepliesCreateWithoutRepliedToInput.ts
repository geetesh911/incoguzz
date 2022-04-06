import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCommentRepliesInput } from "../inputs/UserCreateNestedOneWithoutCommentRepliesInput";

@TypeGraphQL.InputType("CommentRepliesCreateWithoutRepliedToInput", {
  isAbstract: true,
})
export class CommentRepliesCreateWithoutRepliedToInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentRepliesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutCommentRepliesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
