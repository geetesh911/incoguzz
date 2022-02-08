import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceCreateInput } from "../../../inputs/PlaceCreateInput";
import { PlaceUpdateInput } from "../../../inputs/PlaceUpdateInput";
import { PlaceWhereUniqueInput } from "../../../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPlaceArgs {
  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: false,
  })
  where!: PlaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaceCreateInput, {
    nullable: false,
  })
  create!: PlaceCreateInput;

  @TypeGraphQL.Field(_type => PlaceUpdateInput, {
    nullable: false,
  })
  update!: PlaceUpdateInput;
}
