import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionRelationFilter } from "../inputs/PollOptionRelationFilter";
import { PollRelationFilter } from "../inputs/PollRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PollAnswerWhereInput", {
  isAbstract: true,
})
export class PollAnswerWhereInput {
  @TypeGraphQL.Field(_type => [PollAnswerWhereInput], {
    nullable: true,
  })
  AND?: PollAnswerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereInput], {
    nullable: true,
  })
  OR?: PollAnswerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereInput], {
    nullable: true,
  })
  NOT?: PollAnswerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PollRelationFilter, {
    nullable: true,
  })
  poll?: PollRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  pollId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PollOptionRelationFilter, {
    nullable: true,
  })
  pollOption?: PollOptionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  pollOptionId?: StringFilter | undefined;
}
