import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutStoryInput } from "../inputs/MessageCreateWithoutStoryInput";
import { MessageUpdateWithoutStoryInput } from "../inputs/MessageUpdateWithoutStoryInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutStoryInput", {
  isAbstract: true,
})
export class MessageUpsertWithWhereUniqueWithoutStoryInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutStoryInput, {
    nullable: false,
  })
  update!: MessageUpdateWithoutStoryInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutStoryInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutStoryInput;
}
