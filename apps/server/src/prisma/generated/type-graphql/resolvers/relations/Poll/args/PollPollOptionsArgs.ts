import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PollOptionOrderByWithRelationAndSearchRelevanceInput";
import { PollOptionWhereInput } from "../../../inputs/PollOptionWhereInput";
import { PollOptionWhereUniqueInput } from "../../../inputs/PollOptionWhereUniqueInput";
import { PollOptionScalarFieldEnum } from "../../../../enums/PollOptionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PollPollOptionsArgs {
  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  where?: PollOptionWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [PollOptionOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: PollOptionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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
