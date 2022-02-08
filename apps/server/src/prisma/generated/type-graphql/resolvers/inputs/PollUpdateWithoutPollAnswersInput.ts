import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionUpdateManyWithoutPollInput } from "../inputs/PollOptionUpdateManyWithoutPollInput";
import { PostUpdateOneRequiredWithoutPollInput } from "../inputs/PostUpdateOneRequiredWithoutPollInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PollUpdateWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollUpdateWithoutPollAnswersInput {
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

  @TypeGraphQL.Field(_type => PollOptionUpdateManyWithoutPollInput, {
    nullable: true,
  })
  pollOptions?: PollOptionUpdateManyWithoutPollInput | undefined;
}
