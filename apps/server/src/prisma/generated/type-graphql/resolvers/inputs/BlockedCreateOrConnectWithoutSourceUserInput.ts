import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateWithoutSourceUserInput } from "../inputs/BlockedCreateWithoutSourceUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedCreateOrConnectWithoutSourceUserInput", {
  isAbstract: true,
})
export class BlockedCreateOrConnectWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedCreateWithoutSourceUserInput, {
    nullable: false,
  })
  create!: BlockedCreateWithoutSourceUserInput;
}
