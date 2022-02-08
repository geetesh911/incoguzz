import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateWithoutRepliedToInput } from "../inputs/CommentRepliesCreateWithoutRepliedToInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesCreateOrConnectWithoutRepliedToInput", {
  isAbstract: true,
})
export class CommentRepliesCreateOrConnectWithoutRepliedToInput {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesCreateWithoutRepliedToInput, {
    nullable: false,
  })
  create!: CommentRepliesCreateWithoutRepliedToInput;
}
