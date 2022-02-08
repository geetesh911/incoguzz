import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PollOptionScalarWhereInput", {
  isAbstract: true,
})
export class PollOptionScalarWhereInput {
  @TypeGraphQL.Field(_type => [PollOptionScalarWhereInput], {
    nullable: true,
  })
  AND?: PollOptionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarWhereInput], {
    nullable: true,
  })
  OR?: PollOptionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarWhereInput], {
    nullable: true,
  })
  NOT?: PollOptionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  option?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  pollId?: StringFilter | undefined;
}
