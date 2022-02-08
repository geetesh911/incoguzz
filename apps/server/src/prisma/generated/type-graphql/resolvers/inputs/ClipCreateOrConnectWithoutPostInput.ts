import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateWithoutPostInput } from "../inputs/ClipCreateWithoutPostInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class ClipCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipCreateWithoutPostInput, {
    nullable: false,
  })
  create!: ClipCreateWithoutPostInput;
}
