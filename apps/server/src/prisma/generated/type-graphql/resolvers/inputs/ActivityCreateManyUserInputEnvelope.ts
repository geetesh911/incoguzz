import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateManyUserInput } from "../inputs/ActivityCreateManyUserInput";

@TypeGraphQL.InputType("ActivityCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class ActivityCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ActivityCreateManyUserInput], {
    nullable: false,
  })
  data!: ActivityCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
