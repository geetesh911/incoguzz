import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutStoryInput } from "../inputs/MessageUpdateWithoutStoryInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutStoryInput", {
  isAbstract: true,
})
export class MessageUpdateWithWhereUniqueWithoutStoryInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutStoryInput, {
    nullable: false,
  })
  data!: MessageUpdateWithoutStoryInput;
}
