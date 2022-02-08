import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateOrConnectWithoutPollOptionsInput } from "../inputs/PollCreateOrConnectWithoutPollOptionsInput";
import { PollCreateWithoutPollOptionsInput } from "../inputs/PollCreateWithoutPollOptionsInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateNestedOneWithoutPollOptionsInput", {
  isAbstract: true,
})
export class PollCreateNestedOneWithoutPollOptionsInput {
  @TypeGraphQL.Field(_type => PollCreateWithoutPollOptionsInput, {
    nullable: true,
  })
  create?: PollCreateWithoutPollOptionsInput | undefined;

  @TypeGraphQL.Field(_type => PollCreateOrConnectWithoutPollOptionsInput, {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPollOptionsInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: true,
  })
  connect?: PollWhereUniqueInput | undefined;
}
