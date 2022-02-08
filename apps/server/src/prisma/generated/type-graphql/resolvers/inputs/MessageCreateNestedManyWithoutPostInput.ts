import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyPostInputEnvelope } from "../inputs/MessageCreateManyPostInputEnvelope";
import { MessageCreateOrConnectWithoutPostInput } from "../inputs/MessageCreateOrConnectWithoutPostInput";
import { MessageCreateWithoutPostInput } from "../inputs/MessageCreateWithoutPostInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutPostInput", {
  isAbstract: true,
})
export class MessageCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutPostInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
