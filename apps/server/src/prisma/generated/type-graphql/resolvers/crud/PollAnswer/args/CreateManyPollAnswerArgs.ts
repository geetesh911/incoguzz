import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollAnswerCreateManyInput } from "../../../inputs/PollAnswerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPollAnswerArgs {
  @TypeGraphQL.Field(_type => [PollAnswerCreateManyInput], {
    nullable: false,
  })
  data!: PollAnswerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
