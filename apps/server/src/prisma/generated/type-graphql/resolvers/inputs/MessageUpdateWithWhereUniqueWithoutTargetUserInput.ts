import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutTargetUserInput } from "../inputs/MessageUpdateWithoutTargetUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutTargetUserInput", {
  isAbstract: true,
})
export class MessageUpdateWithWhereUniqueWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutTargetUserInput, {
    nullable: false,
  })
  data!: MessageUpdateWithoutTargetUserInput;
}
