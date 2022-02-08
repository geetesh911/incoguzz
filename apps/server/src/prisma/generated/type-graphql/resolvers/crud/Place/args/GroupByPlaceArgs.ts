import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceOrderByWithAggregationInput } from "../../../inputs/PlaceOrderByWithAggregationInput";
import { PlaceScalarWhereWithAggregatesInput } from "../../../inputs/PlaceScalarWhereWithAggregatesInput";
import { PlaceWhereInput } from "../../../inputs/PlaceWhereInput";
import { PlaceScalarFieldEnum } from "../../../../enums/PlaceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlaceArgs {
  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  where?: PlaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlaceOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PlaceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaceScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "address">;

  @TypeGraphQL.Field(_type => PlaceScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PlaceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
