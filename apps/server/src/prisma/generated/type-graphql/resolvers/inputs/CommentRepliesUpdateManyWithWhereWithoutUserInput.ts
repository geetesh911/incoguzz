import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesScalarWhereInput } from "../inputs/CommentRepliesScalarWhereInput";
import { CommentRepliesUpdateManyMutationInput } from "../inputs/CommentRepliesUpdateManyMutationInput";

@TypeGraphQL.InputType("CommentRepliesUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentRepliesScalarWhereInput, {
    nullable: false,
  })
  where!: CommentRepliesScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CommentRepliesUpdateManyMutationInput;
}
