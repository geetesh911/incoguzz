import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerUpdateManyWithoutPollOptionInput } from "../inputs/PollAnswerUpdateManyWithoutPollOptionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PollOptionUpdateWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionUpdateWithoutPollInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  option?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerUpdateManyWithoutPollOptionInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerUpdateManyWithoutPollOptionInput | undefined;
}
