import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutPostInput } from "../inputs/MessageCreateWithoutPostInput";
import { MessageUpdateWithoutPostInput } from "../inputs/MessageUpdateWithoutPostInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class MessageUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: MessageUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutPostInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutPostInput;
}
