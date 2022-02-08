import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCommentRepliesInput } from "../inputs/UserCreateWithoutCommentRepliesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutCommentRepliesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommentRepliesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCommentRepliesInput;
}
