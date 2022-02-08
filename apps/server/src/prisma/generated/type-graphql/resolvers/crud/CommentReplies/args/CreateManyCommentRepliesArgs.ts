import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentRepliesCreateManyInput } from "../../../inputs/CommentRepliesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCommentRepliesArgs {
  @TypeGraphQL.Field(_type => [CommentRepliesCreateManyInput], {
    nullable: false,
  })
  data!: CommentRepliesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
