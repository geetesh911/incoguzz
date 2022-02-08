import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionUpdateOneRequiredWithoutPollAnswersInput } from "../inputs/PollOptionUpdateOneRequiredWithoutPollAnswersInput";
import { PollUpdateOneRequiredWithoutPollAnswersInput } from "../inputs/PollUpdateOneRequiredWithoutPollAnswersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PollAnswerUpdateWithoutUserInput", {
  isAbstract: true,
})
export class PollAnswerUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateOneRequiredWithoutPollAnswersInput, {
    nullable: true,
  })
  poll?: PollUpdateOneRequiredWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(
    _type => PollOptionUpdateOneRequiredWithoutPollAnswersInput,
    {
      nullable: true,
    },
  )
  pollOption?: PollOptionUpdateOneRequiredWithoutPollAnswersInput | undefined;
}
