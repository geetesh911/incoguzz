import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerListRelationFilter } from "../inputs/PollAnswerListRelationFilter";
import { PollOptionListRelationFilter } from "../inputs/PollOptionListRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PollWhereInput", {
  isAbstract: true,
})
export class PollWhereInput {
  @TypeGraphQL.Field(_type => [PollWhereInput], {
    nullable: true,
  })
  AND?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereInput], {
    nullable: true,
  })
  OR?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereInput], {
    nullable: true,
  })
  NOT?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  question?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PollOptionListRelationFilter, {
    nullable: true,
  })
  pollOptions?: PollOptionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PollAnswerListRelationFilter, {
    nullable: true,
  })
  pollAnswers?: PollAnswerListRelationFilter | undefined;
}
