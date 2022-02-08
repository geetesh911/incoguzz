import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollUpdateManyMutationInput } from "../../../inputs/PollUpdateManyMutationInput";
import { PollWhereInput } from "../../../inputs/PollWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPollArgs {
  @TypeGraphQL.Field(_type => PollUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PollUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  where?: PollWhereInput | undefined;
}
