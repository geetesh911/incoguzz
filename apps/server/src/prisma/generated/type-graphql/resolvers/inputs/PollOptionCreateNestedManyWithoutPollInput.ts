import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateManyPollInputEnvelope } from "../inputs/PollOptionCreateManyPollInputEnvelope";
import { PollOptionCreateOrConnectWithoutPollInput } from "../inputs/PollOptionCreateOrConnectWithoutPollInput";
import { PollOptionCreateWithoutPollInput } from "../inputs/PollOptionCreateWithoutPollInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionCreateNestedManyWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionCreateNestedManyWithoutPollInput {
  @TypeGraphQL.Field(_type => [PollOptionCreateWithoutPollInput], {
    nullable: true,
  })
  create?: PollOptionCreateWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionCreateOrConnectWithoutPollInput], {
    nullable: true,
  })
  connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => PollOptionCreateManyPollInputEnvelope, {
    nullable: true,
  })
  createMany?: PollOptionCreateManyPollInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollOptionWhereUniqueInput[] | undefined;
}
