import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollOptionCreateManyInput } from "../../../inputs/PollOptionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPollOptionArgs {
  @TypeGraphQL.Field(_type => [PollOptionCreateManyInput], {
    nullable: false,
  })
  data!: PollOptionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
