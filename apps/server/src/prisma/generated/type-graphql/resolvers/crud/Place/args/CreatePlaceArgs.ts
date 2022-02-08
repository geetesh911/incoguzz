import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceCreateInput } from "../../../inputs/PlaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePlaceArgs {
  @TypeGraphQL.Field(_type => PlaceCreateInput, {
    nullable: false,
  })
  data!: PlaceCreateInput;
}
