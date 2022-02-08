import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateWithoutUserInput } from "../inputs/CommentRepliesCreateWithoutUserInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesCreateWithoutUserInput, {
    nullable: false,
  })
  create!: CommentRepliesCreateWithoutUserInput;
}
