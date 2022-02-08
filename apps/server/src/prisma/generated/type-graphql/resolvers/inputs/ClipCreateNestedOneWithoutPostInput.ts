import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateOrConnectWithoutPostInput } from "../inputs/ClipCreateOrConnectWithoutPostInput";
import { ClipCreateWithoutPostInput } from "../inputs/ClipCreateWithoutPostInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipCreateNestedOneWithoutPostInput", {
  isAbstract: true,
})
export class ClipCreateNestedOneWithoutPostInput {
  @TypeGraphQL.Field(_type => ClipCreateWithoutPostInput, {
    nullable: true,
  })
  create?: ClipCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ClipCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: ClipCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: true,
  })
  connect?: ClipWhereUniqueInput | undefined;
}
