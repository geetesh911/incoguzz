import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateOrConnectWithoutPostsInput } from "../inputs/PlaceCreateOrConnectWithoutPostsInput";
import { PlaceCreateWithoutPostsInput } from "../inputs/PlaceCreateWithoutPostsInput";
import { PlaceWhereUniqueInput } from "../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.InputType("PlaceCreateNestedOneWithoutPostsInput", {
  isAbstract: true,
})
export class PlaceCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => PlaceCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: PlaceCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceCreateOrConnectWithoutPostsInput, {
    nullable: true,
  })
  connectOrCreate?: PlaceCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: true,
  })
  connect?: PlaceWhereUniqueInput | undefined;
}
