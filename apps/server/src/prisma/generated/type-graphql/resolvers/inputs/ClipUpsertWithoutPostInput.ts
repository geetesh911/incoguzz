import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateWithoutPostInput } from "../inputs/ClipCreateWithoutPostInput";
import { ClipUpdateWithoutPostInput } from "../inputs/ClipUpdateWithoutPostInput";

@TypeGraphQL.InputType("ClipUpsertWithoutPostInput", {
  isAbstract: true,
})
export class ClipUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => ClipUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: ClipUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => ClipCreateWithoutPostInput, {
    nullable: false,
  })
  create!: ClipCreateWithoutPostInput;
}
