import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CommentRepliesScalarWhereInput", {
  isAbstract: true,
})
export class CommentRepliesScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereInput], {
    nullable: true,
  })
  AND?: CommentRepliesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereInput], {
    nullable: true,
  })
  OR?: CommentRepliesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereInput], {
    nullable: true,
  })
  NOT?: CommentRepliesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  comment?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  repliedToId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;
}
