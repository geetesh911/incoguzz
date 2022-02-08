import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedOrderByWithAggregationInput } from "../../../inputs/BlockedOrderByWithAggregationInput";
import { BlockedScalarWhereWithAggregatesInput } from "../../../inputs/BlockedScalarWhereWithAggregatesInput";
import { BlockedWhereInput } from "../../../inputs/BlockedWhereInput";
import { BlockedScalarFieldEnum } from "../../../../enums/BlockedScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  where?: BlockedWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlockedOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: BlockedOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "sourceUserId" | "targetUserId" | "createdAt" | "updatedAt"
  >;

  @TypeGraphQL.Field(_type => BlockedScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: BlockedScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
