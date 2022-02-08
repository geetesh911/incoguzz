import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateWithoutPostsInput } from "../inputs/PlaceCreateWithoutPostsInput";
import { PlaceUpdateWithoutPostsInput } from "../inputs/PlaceUpdateWithoutPostsInput";

@TypeGraphQL.InputType("PlaceUpsertWithoutPostsInput", {
  isAbstract: true,
})
export class PlaceUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => PlaceUpdateWithoutPostsInput, {
    nullable: false,
  })
  update!: PlaceUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => PlaceCreateWithoutPostsInput, {
    nullable: false,
  })
  create!: PlaceCreateWithoutPostsInput;
}
