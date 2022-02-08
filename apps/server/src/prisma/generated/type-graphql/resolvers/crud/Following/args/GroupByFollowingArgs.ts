import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingOrderByWithAggregationInput } from "../../../inputs/FollowingOrderByWithAggregationInput";
import { FollowingScalarWhereWithAggregatesInput } from "../../../inputs/FollowingScalarWhereWithAggregatesInput";
import { FollowingWhereInput } from "../../../inputs/FollowingWhereInput";
import { FollowingScalarFieldEnum } from "../../../../enums/FollowingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true,
  })
  where?: FollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowingOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: FollowingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "userId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => FollowingScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: FollowingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
