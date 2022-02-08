import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateWithoutRepliedToInput } from "../inputs/CommentRepliesCreateWithoutRepliedToInput";
import { CommentRepliesUpdateWithoutRepliedToInput } from "../inputs/CommentRepliesUpdateWithoutRepliedToInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType(
  "CommentRepliesUpsertWithWhereUniqueWithoutRepliedToInput",
  {
    isAbstract: true,
  },
)
export class CommentRepliesUpsertWithWhereUniqueWithoutRepliedToInput {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateWithoutRepliedToInput, {
    nullable: false,
  })
  update!: CommentRepliesUpdateWithoutRepliedToInput;

  @TypeGraphQL.Field(_type => CommentRepliesCreateWithoutRepliedToInput, {
    nullable: false,
  })
  create!: CommentRepliesCreateWithoutRepliedToInput;
}
