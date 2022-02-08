import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesUpdateWithoutUserInput } from "../inputs/CommentRepliesUpdateWithoutUserInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: CommentRepliesUpdateWithoutUserInput;
}
