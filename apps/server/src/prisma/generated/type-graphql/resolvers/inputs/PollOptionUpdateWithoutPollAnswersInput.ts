import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollUpdateOneRequiredWithoutPollOptionsInput } from "../inputs/PollUpdateOneRequiredWithoutPollOptionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PollOptionUpdateWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollOptionUpdateWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  option?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateOneRequiredWithoutPollOptionsInput, {
    nullable: true,
  })
  poll?: PollUpdateOneRequiredWithoutPollOptionsInput | undefined;
}
