import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateWithoutTargetUserInput } from "../inputs/BlockedCreateWithoutTargetUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedCreateOrConnectWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedCreateOrConnectWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedCreateWithoutTargetUserInput, {
    nullable: false,
  })
  create!: BlockedCreateWithoutTargetUserInput;
}
