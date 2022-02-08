import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateWithoutSourceUserInput } from "../inputs/BlockedCreateWithoutSourceUserInput";
import { BlockedUpdateWithoutSourceUserInput } from "../inputs/BlockedUpdateWithoutSourceUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedUpsertWithWhereUniqueWithoutSourceUserInput", {
  isAbstract: true,
})
export class BlockedUpsertWithWhereUniqueWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedUpdateWithoutSourceUserInput, {
    nullable: false,
  })
  update!: BlockedUpdateWithoutSourceUserInput;

  @TypeGraphQL.Field(_type => BlockedCreateWithoutSourceUserInput, {
    nullable: false,
  })
  create!: BlockedCreateWithoutSourceUserInput;
}
