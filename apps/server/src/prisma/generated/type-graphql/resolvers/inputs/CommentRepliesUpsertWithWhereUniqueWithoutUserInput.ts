import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateWithoutUserInput } from "../inputs/CommentRepliesCreateWithoutUserInput";
import { CommentRepliesUpdateWithoutUserInput } from "../inputs/CommentRepliesUpdateWithoutUserInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: CommentRepliesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CommentRepliesCreateWithoutUserInput, {
    nullable: false,
  })
  create!: CommentRepliesCreateWithoutUserInput;
}
