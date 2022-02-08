import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerUpdateManyWithoutPollInput } from "../inputs/PollAnswerUpdateManyWithoutPollInput";
import { PostUpdateOneRequiredWithoutPollInput } from "../inputs/PostUpdateOneRequiredWithoutPollInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PollUpdateWithoutPollOptionsInput", {
  isAbstract: true,
})
export class PollUpdateWithoutPollOptionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  question?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutPollInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerUpdateManyWithoutPollInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerUpdateManyWithoutPollInput | undefined;
}
