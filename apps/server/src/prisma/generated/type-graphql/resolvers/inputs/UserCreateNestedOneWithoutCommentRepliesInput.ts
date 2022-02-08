import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommentRepliesInput } from "../inputs/UserCreateOrConnectWithoutCommentRepliesInput";
import { UserCreateWithoutCommentRepliesInput } from "../inputs/UserCreateWithoutCommentRepliesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCommentRepliesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutCommentRepliesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommentRepliesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutCommentRepliesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentRepliesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentRepliesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
