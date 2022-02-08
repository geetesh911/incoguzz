import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateWithoutPostsInput } from "../inputs/PlaceCreateWithoutPostsInput";
import { PlaceWhereUniqueInput } from "../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.InputType("PlaceCreateOrConnectWithoutPostsInput", {
  isAbstract: true,
})
export class PlaceCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: false,
  })
  where!: PlaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaceCreateWithoutPostsInput, {
    nullable: false,
  })
  create!: PlaceCreateWithoutPostsInput;
}
