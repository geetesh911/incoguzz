import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutPlaceInput } from "../inputs/PostCreateNestedManyWithoutPlaceInput";

@TypeGraphQL.InputType("PlaceCreateInput", {
  isAbstract: true,
})
export class PlaceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  address!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutPlaceInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutPlaceInput | undefined;
}
