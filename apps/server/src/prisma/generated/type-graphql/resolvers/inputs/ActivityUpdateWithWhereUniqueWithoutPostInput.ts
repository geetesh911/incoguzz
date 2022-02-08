import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityUpdateWithoutPostInput } from "../inputs/ActivityUpdateWithoutPostInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityUpdateWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class ActivityUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: ActivityUpdateWithoutPostInput;
}
