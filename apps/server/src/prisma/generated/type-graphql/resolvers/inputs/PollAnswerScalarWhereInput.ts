import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PollAnswerScalarWhereInput", {
  isAbstract: true,
})
export class PollAnswerScalarWhereInput {
  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereInput], {
    nullable: true,
  })
  AND?: PollAnswerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereInput], {
    nullable: true,
  })
  OR?: PollAnswerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereInput], {
    nullable: true,
  })
  NOT?: PollAnswerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  pollId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  pollOptionId?: StringFilter | undefined;
}
