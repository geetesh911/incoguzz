import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateWithoutPostInput } from "../inputs/PhotoCreateWithoutPostInput";
import { PhotoUpdateWithoutPostInput } from "../inputs/PhotoUpdateWithoutPostInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType("PhotoUpsertWithWhereUniqueWithoutPostInput", {
  isAbstract: true,
})
export class PhotoUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false,
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: PhotoUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PhotoCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PhotoCreateWithoutPostInput;
}
