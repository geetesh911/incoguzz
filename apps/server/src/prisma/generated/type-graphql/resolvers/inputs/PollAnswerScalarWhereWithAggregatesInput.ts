import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PollAnswerScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class PollAnswerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PollAnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PollAnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PollAnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  pollId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  pollOptionId?: StringWithAggregatesFilter | undefined;
}
