import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateOrConnectWithoutPollOptionsInput } from "../inputs/PollCreateOrConnectWithoutPollOptionsInput";
import { PollCreateWithoutPollOptionsInput } from "../inputs/PollCreateWithoutPollOptionsInput";
import { PollUpdateWithoutPollOptionsInput } from "../inputs/PollUpdateWithoutPollOptionsInput";
import { PollUpsertWithoutPollOptionsInput } from "../inputs/PollUpsertWithoutPollOptionsInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateOneRequiredWithoutPollOptionsInput", {
  isAbstract: true,
})
export class PollUpdateOneRequiredWithoutPollOptionsInput {
  @TypeGraphQL.Field(_type => PollCreateWithoutPollOptionsInput, {
    nullable: true,
  })
  create?: PollCreateWithoutPollOptionsInput | undefined;

  @TypeGraphQL.Field(_type => PollCreateOrConnectWithoutPollOptionsInput, {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPollOptionsInput | undefined;

  @TypeGraphQL.Field(_type => PollUpsertWithoutPollOptionsInput, {
    nullable: true,
  })
  upsert?: PollUpsertWithoutPollOptionsInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: true,
  })
  connect?: PollWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateWithoutPollOptionsInput, {
    nullable: true,
  })
  update?: PollUpdateWithoutPollOptionsInput | undefined;
}
