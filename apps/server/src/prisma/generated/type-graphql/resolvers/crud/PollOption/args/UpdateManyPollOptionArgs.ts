import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionUpdateManyMutationInput } from "../../../inputs/PollOptionUpdateManyMutationInput";
import { PollOptionWhereInput } from "../../../inputs/PollOptionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPollOptionArgs {
  @TypeGraphQL.Field(_type => PollOptionUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PollOptionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  where?: PollOptionWhereInput | undefined;
}
