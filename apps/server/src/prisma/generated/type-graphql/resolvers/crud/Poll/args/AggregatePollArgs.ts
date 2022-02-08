import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOrderByWithRelationInput } from "../../../inputs/PollOrderByWithRelationInput";
import { PollWhereInput } from "../../../inputs/PollWhereInput";
import { PollWhereUniqueInput } from "../../../inputs/PollWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePollArgs {
  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  where?: PollWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PollOrderByWithRelationInput[] | undefined;

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
}
