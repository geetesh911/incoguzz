import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedUpdateWithoutTargetUserInput } from "../inputs/BlockedUpdateWithoutTargetUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedUpdateWithWhereUniqueWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedUpdateWithWhereUniqueWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedUpdateWithoutTargetUserInput, {
    nullable: false,
  })
  data!: BlockedUpdateWithoutTargetUserInput;
}
