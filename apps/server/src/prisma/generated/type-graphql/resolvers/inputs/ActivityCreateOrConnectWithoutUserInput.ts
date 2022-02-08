import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateWithoutUserInput } from "../inputs/ActivityCreateWithoutUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class ActivityCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ActivityCreateWithoutUserInput;
}
