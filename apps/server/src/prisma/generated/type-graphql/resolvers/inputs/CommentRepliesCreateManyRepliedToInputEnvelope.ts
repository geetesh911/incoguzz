import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateManyRepliedToInput } from "../inputs/CommentRepliesCreateManyRepliedToInput";

@TypeGraphQL.InputType("CommentRepliesCreateManyRepliedToInputEnvelope", {
  isAbstract: true,
})
export class CommentRepliesCreateManyRepliedToInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentRepliesCreateManyRepliedToInput], {
    nullable: false,
  })
  data!: CommentRepliesCreateManyRepliedToInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
