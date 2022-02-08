import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCreateWithoutPostInput } from "../inputs/TextualCreateWithoutPostInput";
import { TextualWhereUniqueInput } from "../inputs/TextualWhereUniqueInput";

@TypeGraphQL.InputType("TextualCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class TextualCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: false,
  })
  where!: TextualWhereUniqueInput;

  @TypeGraphQL.Field(_type => TextualCreateWithoutPostInput, {
    nullable: false,
  })
  create!: TextualCreateWithoutPostInput;
}
