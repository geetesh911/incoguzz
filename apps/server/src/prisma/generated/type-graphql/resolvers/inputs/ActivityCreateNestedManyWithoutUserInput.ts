import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateManyUserInputEnvelope } from "../inputs/ActivityCreateManyUserInputEnvelope";
import { ActivityCreateOrConnectWithoutUserInput } from "../inputs/ActivityCreateOrConnectWithoutUserInput";
import { ActivityCreateWithoutUserInput } from "../inputs/ActivityCreateWithoutUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class ActivityCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ActivityCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ActivityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ActivityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ActivityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActivityWhereUniqueInput[] | undefined;
}
