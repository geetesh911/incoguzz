import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionOrderByWithRelationInput } from "../../../inputs/PollOptionOrderByWithRelationInput";
import { PollOptionWhereInput } from "../../../inputs/PollOptionWhereInput";
import { PollOptionWhereUniqueInput } from "../../../inputs/PollOptionWhereUniqueInput";
import { PollOptionScalarFieldEnum } from "../../../../enums/PollOptionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  where?: PollOptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollOptionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PollOptionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PollOptionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "option" | "pollId"> | undefined;
}
