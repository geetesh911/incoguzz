import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceOrderByWithRelationInput } from "../../../inputs/PlaceOrderByWithRelationInput";
import { PlaceWhereInput } from "../../../inputs/PlaceWhereInput";
import { PlaceWhereUniqueInput } from "../../../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePlaceArgs {
  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  where?: PlaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlaceOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PlaceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PlaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
