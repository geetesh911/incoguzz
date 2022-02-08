import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerListRelationFilter } from "../inputs/PollAnswerListRelationFilter";
import { PollRelationFilter } from "../inputs/PollRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PollOptionWhereInput", {
  isAbstract: true,
})
export class PollOptionWhereInput {
  @TypeGraphQL.Field(_type => [PollOptionWhereInput], {
    nullable: true,
  })
  AND?: PollOptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereInput], {
    nullable: true,
  })
  OR?: PollOptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereInput], {
    nullable: true,
  })
  NOT?: PollOptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  option?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PollRelationFilter, {
    nullable: true,
  })
  poll?: PollRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  pollId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PollAnswerListRelationFilter, {
    nullable: true,
  })
  pollAnswers?: PollAnswerListRelationFilter | undefined;
}
