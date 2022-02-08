import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateWithoutPostInput } from "../inputs/ActivityCreateWithoutPostInput";
import { ActivityUpdateWithoutPostInput } from "../inputs/ActivityUpdateWithoutPostInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityUpsertWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class ActivityUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: ActivityUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => ActivityCreateWithoutPostInput, {
    nullable: false,
  })
  create!: ActivityCreateWithoutPostInput;
}
