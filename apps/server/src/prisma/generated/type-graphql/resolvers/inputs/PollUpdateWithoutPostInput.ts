import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerUpdateManyWithoutPollInput } from "../inputs/PollAnswerUpdateManyWithoutPollInput";
import { PollOptionUpdateManyWithoutPollInput } from "../inputs/PollOptionUpdateManyWithoutPollInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PollUpdateWithoutPostInput", {
  isAbstract: true,
})
export class PollUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  question?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionUpdateManyWithoutPollInput, {
    nullable: true,
  })
  pollOptions?: PollOptionUpdateManyWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerUpdateManyWithoutPollInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerUpdateManyWithoutPollInput | undefined;
}
