import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyStoryInputEnvelope } from "../inputs/MessageCreateManyStoryInputEnvelope";
import { MessageCreateOrConnectWithoutStoryInput } from "../inputs/MessageCreateOrConnectWithoutStoryInput";
import { MessageCreateWithoutStoryInput } from "../inputs/MessageCreateWithoutStoryInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutStoryInput } from "../inputs/MessageUpdateManyWithWhereWithoutStoryInput";
import { MessageUpdateWithWhereUniqueWithoutStoryInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutStoryInput";
import { MessageUpsertWithWhereUniqueWithoutStoryInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutStoryInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutStoryInput", {
  isAbstract: true,
})
export class MessageUpdateManyWithoutStoryInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutStoryInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutStoryInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutStoryInput], {
    nullable: true,
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyStoryInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyStoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutStoryInput], {
    nullable: true,
  })
  update?: MessageUpdateWithWhereUniqueWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutStoryInput], {
    nullable: true,
  })
  updateMany?: MessageUpdateManyWithWhereWithoutStoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
