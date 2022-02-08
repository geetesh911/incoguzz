import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCreateOrConnectWithoutPostInput } from "../inputs/TextualCreateOrConnectWithoutPostInput";
import { TextualCreateWithoutPostInput } from "../inputs/TextualCreateWithoutPostInput";
import { TextualWhereUniqueInput } from "../inputs/TextualWhereUniqueInput";

@TypeGraphQL.InputType("TextualCreateNestedOneWithoutPostInput", {
  isAbstract: true,
})
export class TextualCreateNestedOneWithoutPostInput {
  @TypeGraphQL.Field(_type => TextualCreateWithoutPostInput, {
    nullable: true,
  })
  create?: TextualCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => TextualCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: TextualCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: true,
  })
  connect?: TextualWhereUniqueInput | undefined;
}
