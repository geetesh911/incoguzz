import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionUpdateOneRequiredWithoutPollAnswersInput } from "../inputs/PollOptionUpdateOneRequiredWithoutPollAnswersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPollAnswersInput } from "../inputs/UserUpdateOneRequiredWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollAnswerUpdateWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerUpdateWithoutPollInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPollAnswersInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(
    _type => PollOptionUpdateOneRequiredWithoutPollAnswersInput,
    {
      nullable: true,
    },
  )
  pollOption?: PollOptionUpdateOneRequiredWithoutPollAnswersInput | undefined;
}
