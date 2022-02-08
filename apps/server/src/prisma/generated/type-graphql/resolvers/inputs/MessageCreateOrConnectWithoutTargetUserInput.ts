import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutTargetUserInput } from "../inputs/MessageCreateWithoutTargetUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutTargetUserInput", {
  isAbstract: true,
})
export class MessageCreateOrConnectWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutTargetUserInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutTargetUserInput;
}
