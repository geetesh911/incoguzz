import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PlaceOrderByWithRelationAndSearchRelevanceInput";
import { PlaceWhereInput } from "../../../inputs/PlaceWhereInput";
import { PlaceWhereUniqueInput } from "../../../inputs/PlaceWhereUniqueInput";
import { PlaceScalarFieldEnum } from "../../../../enums/PlaceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPlaceArgs {
  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  where?: PlaceWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [PlaceOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: PlaceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PlaceScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "name" | "address"> | undefined;
}
