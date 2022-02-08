import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyStoryInputEnvelope } from "../inputs/MessageCreateManyStoryInputEnvelope";
import { MessageCreateOrConnectWithoutStoryInput } from "../inputs/MessageCreateOrConnectWithoutStoryInput";
import { MessageCreateWithoutStoryInput } from "../inputs/MessageCreateWithoutStoryInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutStoryInput", {
  isAbstract: true,
})
export class MessageCreateNestedManyWithoutStoryInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutStoryInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutStoryInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyStoryInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyStoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
