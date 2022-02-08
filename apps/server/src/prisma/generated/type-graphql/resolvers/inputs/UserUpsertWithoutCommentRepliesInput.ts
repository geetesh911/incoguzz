import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCommentRepliesInput } from "../inputs/UserCreateWithoutCommentRepliesInput";
import { UserUpdateWithoutCommentRepliesInput } from "../inputs/UserUpdateWithoutCommentRepliesInput";

@TypeGraphQL.InputType("UserUpsertWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutCommentRepliesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentRepliesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutCommentRepliesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommentRepliesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCommentRepliesInput;
}
