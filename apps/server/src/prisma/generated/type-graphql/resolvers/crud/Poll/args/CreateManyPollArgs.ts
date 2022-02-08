import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollCreateManyInput } from "../../../inputs/PollCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPollArgs {
  @TypeGraphQL.Field(_type => [PollCreateManyInput], {
    nullable: false,
  })
  data!: PollCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
