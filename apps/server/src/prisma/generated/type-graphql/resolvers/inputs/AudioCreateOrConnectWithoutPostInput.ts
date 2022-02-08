import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateWithoutPostInput } from "../inputs/AudioCreateWithoutPostInput";
import { AudioWhereUniqueInput } from "../inputs/AudioWhereUniqueInput";

@TypeGraphQL.InputType("AudioCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class AudioCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: false,
  })
  where!: AudioWhereUniqueInput;

  @TypeGraphQL.Field(_type => AudioCreateWithoutPostInput, {
    nullable: false,
  })
  create!: AudioCreateWithoutPostInput;
}
