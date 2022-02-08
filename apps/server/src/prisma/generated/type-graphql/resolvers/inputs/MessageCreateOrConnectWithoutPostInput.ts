import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutPostInput } from "../inputs/MessageCreateWithoutPostInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class MessageCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutPostInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutPostInput;
}
