import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateManyUserInput } from "../inputs/CommentRepliesCreateManyUserInput";

@TypeGraphQL.InputType("CommentRepliesCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class CommentRepliesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentRepliesCreateManyUserInput], {
    nullable: false,
  })
  data!: CommentRepliesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
