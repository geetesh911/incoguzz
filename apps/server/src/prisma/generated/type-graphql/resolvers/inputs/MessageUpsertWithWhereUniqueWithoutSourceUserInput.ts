import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSourceUserInput } from "../inputs/MessageCreateWithoutSourceUserInput";
import { MessageUpdateWithoutSourceUserInput } from "../inputs/MessageUpdateWithoutSourceUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutSourceUserInput", {
  isAbstract: true,
})
export class MessageUpsertWithWhereUniqueWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutSourceUserInput, {
    nullable: false,
  })
  update!: MessageUpdateWithoutSourceUserInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSourceUserInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutSourceUserInput;
}
