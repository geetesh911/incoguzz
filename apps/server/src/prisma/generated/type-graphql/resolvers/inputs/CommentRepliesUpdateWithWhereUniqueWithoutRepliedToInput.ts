import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesUpdateWithoutRepliedToInput } from "../inputs/CommentRepliesUpdateWithoutRepliedToInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType(
  "CommentRepliesUpdateWithWhereUniqueWithoutRepliedToInput",
  {
    isAbstract: true,
  },
)
export class CommentRepliesUpdateWithWhereUniqueWithoutRepliedToInput {
  @TypeGraphQL.Field(_type => CommentRepliesWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentRepliesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateWithoutRepliedToInput, {
    nullable: false,
  })
  data!: CommentRepliesUpdateWithoutRepliedToInput;
}
