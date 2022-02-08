import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateOrConnectWithoutPollAnswersInput } from "../inputs/PollCreateOrConnectWithoutPollAnswersInput";
import { PollCreateWithoutPollAnswersInput } from "../inputs/PollCreateWithoutPollAnswersInput";
import { PollUpdateWithoutPollAnswersInput } from "../inputs/PollUpdateWithoutPollAnswersInput";
import { PollUpsertWithoutPollAnswersInput } from "../inputs/PollUpsertWithoutPollAnswersInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateOneRequiredWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollUpdateOneRequiredWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollCreateWithoutPollAnswersInput, {
    nullable: true,
  })
  create?: PollCreateWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => PollCreateOrConnectWithoutPollAnswersInput, {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => PollUpsertWithoutPollAnswersInput, {
    nullable: true,
  })
  upsert?: PollUpsertWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: true,
  })
  connect?: PollWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateWithoutPollAnswersInput, {
    nullable: true,
  })
  update?: PollUpdateWithoutPollAnswersInput | undefined;
}
