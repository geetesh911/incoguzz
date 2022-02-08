import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateOrConnectWithoutPostInput } from "../inputs/AudioCreateOrConnectWithoutPostInput";
import { AudioCreateWithoutPostInput } from "../inputs/AudioCreateWithoutPostInput";
import { AudioWhereUniqueInput } from "../inputs/AudioWhereUniqueInput";

@TypeGraphQL.InputType("AudioCreateNestedOneWithoutPostInput", {
  isAbstract: true,
})
export class AudioCreateNestedOneWithoutPostInput {
  @TypeGraphQL.Field(_type => AudioCreateWithoutPostInput, {
    nullable: true,
  })
  create?: AudioCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AudioCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: AudioCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: true,
  })
  connect?: AudioWhereUniqueInput | undefined;
}
