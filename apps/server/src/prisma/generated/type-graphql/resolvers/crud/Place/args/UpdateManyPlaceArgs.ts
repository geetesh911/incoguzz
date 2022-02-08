import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceUpdateManyMutationInput } from "../../../inputs/PlaceUpdateManyMutationInput";
import { PlaceWhereInput } from "../../../inputs/PlaceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlaceArgs {
  @TypeGraphQL.Field(_type => PlaceUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PlaceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  where?: PlaceWhereInput | undefined;
}
