import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoUpdateWithoutPostInput } from "../inputs/PhotoUpdateWithoutPostInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType("PhotoUpdateWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class PhotoUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false,
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: PhotoUpdateWithoutPostInput;
}
