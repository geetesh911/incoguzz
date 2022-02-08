import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutSourceUserInput } from "../inputs/MessageUpdateWithoutSourceUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutSourceUserInput", {
  isAbstract: true,
})
export class MessageUpdateWithWhereUniqueWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutSourceUserInput, {
    nullable: false,
  })
  data!: MessageUpdateWithoutSourceUserInput;
}
