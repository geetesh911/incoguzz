import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceWhereInput } from "../../../inputs/PlaceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlaceArgs {
  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  where?: PlaceWhereInput | undefined;
}
