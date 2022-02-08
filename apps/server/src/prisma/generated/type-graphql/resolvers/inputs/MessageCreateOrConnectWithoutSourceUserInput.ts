import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSourceUserInput } from "../inputs/MessageCreateWithoutSourceUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutSourceUserInput", {
  isAbstract: true,
})
export class MessageCreateOrConnectWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSourceUserInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutSourceUserInput;
}
