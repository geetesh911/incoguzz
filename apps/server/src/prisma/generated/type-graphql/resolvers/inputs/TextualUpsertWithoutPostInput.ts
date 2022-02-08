import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCreateWithoutPostInput } from "../inputs/TextualCreateWithoutPostInput";
import { TextualUpdateWithoutPostInput } from "../inputs/TextualUpdateWithoutPostInput";

@TypeGraphQL.InputType("TextualUpsertWithoutPostInput", {
  isAbstract: true,
})
export class TextualUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => TextualUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: TextualUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => TextualCreateWithoutPostInput, {
    nullable: false,
  })
  create!: TextualCreateWithoutPostInput;
}
