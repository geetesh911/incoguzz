import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyPostInputEnvelope } from "../inputs/MessageCreateManyPostInputEnvelope";
import { MessageCreateOrConnectWithoutPostInput } from "../inputs/MessageCreateOrConnectWithoutPostInput";
import { MessageCreateWithoutPostInput } from "../inputs/MessageCreateWithoutPostInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutPostInput } from "../inputs/MessageUpdateManyWithWhereWithoutPostInput";
import { MessageUpdateWithWhereUniqueWithoutPostInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutPostInput";
import { MessageUpsertWithWhereUniqueWithoutPostInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutPostInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutPostInput", {
  isAbstract: true,
})
export class MessageUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutPostInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: MessageUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: MessageUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
