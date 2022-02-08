import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySourceUserInputEnvelope } from "../inputs/MessageCreateManySourceUserInputEnvelope";
import { MessageCreateOrConnectWithoutSourceUserInput } from "../inputs/MessageCreateOrConnectWithoutSourceUserInput";
import { MessageCreateWithoutSourceUserInput } from "../inputs/MessageCreateWithoutSourceUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutSourceUserInput", {
  isAbstract: true,
})
export class MessageCreateNestedManyWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutSourceUserInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutSourceUserInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManySourceUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManySourceUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
