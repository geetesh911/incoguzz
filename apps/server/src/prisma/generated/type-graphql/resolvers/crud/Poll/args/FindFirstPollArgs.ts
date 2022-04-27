import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PollOrderByWithRelationAndSearchRelevanceInput";
import { PollWhereInput } from "../../../inputs/PollWhereInput";
import { PollWhereUniqueInput } from "../../../inputs/PollWhereUniqueInput";
import { PollScalarFieldEnum } from "../../../../enums/PollScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPollArgs {
  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  where?: PollWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [PollOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: PollOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PollWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PollScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "question" | "postId"> | undefined;
}
