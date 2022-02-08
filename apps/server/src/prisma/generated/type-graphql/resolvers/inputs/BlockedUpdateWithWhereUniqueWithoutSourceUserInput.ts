import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedUpdateWithoutSourceUserInput } from "../inputs/BlockedUpdateWithoutSourceUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedUpdateWithWhereUniqueWithoutSourceUserInput", {
  isAbstract: true,
})
export class BlockedUpdateWithWhereUniqueWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedUpdateWithoutSourceUserInput, {
    nullable: false,
  })
  data!: BlockedUpdateWithoutSourceUserInput;
}
