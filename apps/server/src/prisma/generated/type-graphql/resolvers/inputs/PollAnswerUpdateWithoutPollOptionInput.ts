import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollUpdateOneRequiredWithoutPollAnswersInput } from "../inputs/PollUpdateOneRequiredWithoutPollAnswersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPollAnswersInput } from "../inputs/UserUpdateOneRequiredWithoutPollAnswersInput";

@TypeGraphQL.InputType("PollAnswerUpdateWithoutPollOptionInput", {
  isAbstract: true,
})
export class PollAnswerUpdateWithoutPollOptionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPollAnswersInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateOneRequiredWithoutPollAnswersInput, {
    nullable: true,
  })
  poll?: PollUpdateOneRequiredWithoutPollAnswersInput | undefined;
}
