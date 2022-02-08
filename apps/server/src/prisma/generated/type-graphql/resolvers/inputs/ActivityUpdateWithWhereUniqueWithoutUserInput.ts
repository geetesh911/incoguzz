import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityUpdateWithoutUserInput } from "../inputs/ActivityUpdateWithoutUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ActivityUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ActivityUpdateWithoutUserInput;
}
