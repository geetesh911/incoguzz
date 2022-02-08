import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceUpdateInput } from "../../../inputs/PlaceUpdateInput";
import { PlaceWhereUniqueInput } from "../../../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePlaceArgs {
  @TypeGraphQL.Field(_type => PlaceUpdateInput, {
    nullable: false,
  })
  data!: PlaceUpdateInput;

  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: false,
  })
  where!: PlaceWhereUniqueInput;
}
