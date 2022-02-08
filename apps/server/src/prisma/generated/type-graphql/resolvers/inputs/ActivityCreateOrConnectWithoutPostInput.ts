import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateWithoutPostInput } from "../inputs/ActivityCreateWithoutPostInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class ActivityCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityCreateWithoutPostInput, {
    nullable: false,
  })
  create!: ActivityCreateWithoutPostInput;
}
