import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateWithoutPostInput } from "../inputs/PhotoCreateWithoutPostInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType("PhotoCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class PhotoCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false,
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PhotoCreateWithoutPostInput;
}
