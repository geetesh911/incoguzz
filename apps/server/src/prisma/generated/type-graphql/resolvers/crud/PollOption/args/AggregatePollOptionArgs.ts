import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PollOptionOrderByWithRelationAndSearchRelevanceInput";
import { PollOptionWhereInput } from "../../../inputs/PollOptionWhereInput";
import { PollOptionWhereUniqueInput } from "../../../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePollOptionArgs {
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
}
