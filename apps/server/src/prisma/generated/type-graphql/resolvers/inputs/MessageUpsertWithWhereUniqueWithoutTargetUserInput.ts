import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutTargetUserInput } from "../inputs/MessageCreateWithoutTargetUserInput";
import { MessageUpdateWithoutTargetUserInput } from "../inputs/MessageUpdateWithoutTargetUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutTargetUserInput", {
  isAbstract: true,
})
export class MessageUpsertWithWhereUniqueWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutTargetUserInput, {
    nullable: false,
  })
  update!: MessageUpdateWithoutTargetUserInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutTargetUserInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutTargetUserInput;
}
