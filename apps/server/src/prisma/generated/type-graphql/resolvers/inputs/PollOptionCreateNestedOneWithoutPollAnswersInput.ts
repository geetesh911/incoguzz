import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateOrConnectWithoutPollAnswersInput } from "../inputs/PollOptionCreateOrConnectWithoutPollAnswersInput";
import { PollOptionCreateWithoutPollAnswersInput } from "../inputs/PollOptionCreateWithoutPollAnswersInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionCreateNestedOneWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollOptionCreateNestedOneWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollOptionCreateWithoutPollAnswersInput, {
    nullable: true,
  })
  create?: PollOptionCreateWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(
    _type => PollOptionCreateOrConnectWithoutPollAnswersInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | PollOptionCreateOrConnectWithoutPollAnswersInput
    | undefined;

  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: true,
  })
  connect?: PollOptionWhereUniqueInput | undefined;
}
