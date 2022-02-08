import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateWithoutUserInput } from "../inputs/ActivityCreateWithoutUserInput";
import { ActivityUpdateWithoutUserInput } from "../inputs/ActivityUpdateWithoutUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ActivityUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ActivityUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ActivityCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ActivityCreateWithoutUserInput;
}
