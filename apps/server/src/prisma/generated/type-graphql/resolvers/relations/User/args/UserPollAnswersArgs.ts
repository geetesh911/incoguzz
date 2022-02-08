import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerOrderByWithRelationInput } from "../../../inputs/PollAnswerOrderByWithRelationInput";
import { PollAnswerWhereInput } from "../../../inputs/PollAnswerWhereInput";
import { PollAnswerWhereUniqueInput } from "../../../inputs/PollAnswerWhereUniqueInput";
import { PollAnswerScalarFieldEnum } from "../../../../enums/PollAnswerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserPollAnswersArgs {
  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  where?: PollAnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PollAnswerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PollAnswerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "userId" | "pollId" | "pollOptionId"> | undefined;
}
