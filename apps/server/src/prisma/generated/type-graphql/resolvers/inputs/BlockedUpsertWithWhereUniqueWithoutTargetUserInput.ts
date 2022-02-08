import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateWithoutTargetUserInput } from "../inputs/BlockedCreateWithoutTargetUserInput";
import { BlockedUpdateWithoutTargetUserInput } from "../inputs/BlockedUpdateWithoutTargetUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedUpsertWithWhereUniqueWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedUpsertWithWhereUniqueWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedUpdateWithoutTargetUserInput, {
    nullable: false,
  })
  update!: BlockedUpdateWithoutTargetUserInput;

  @TypeGraphQL.Field(_type => BlockedCreateWithoutTargetUserInput, {
    nullable: false,
  })
  create!: BlockedCreateWithoutTargetUserInput;
}
