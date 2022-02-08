import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyTargetUserInputEnvelope } from "../inputs/MessageCreateManyTargetUserInputEnvelope";
import { MessageCreateOrConnectWithoutTargetUserInput } from "../inputs/MessageCreateOrConnectWithoutTargetUserInput";
import { MessageCreateWithoutTargetUserInput } from "../inputs/MessageCreateWithoutTargetUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutTargetUserInput", {
  isAbstract: true,
})
export class MessageCreateNestedManyWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutTargetUserInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutTargetUserInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyTargetUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyTargetUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
