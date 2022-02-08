import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestOrderByWithAggregationInput } from "../../../inputs/FollowRequestOrderByWithAggregationInput";
import { FollowRequestScalarWhereWithAggregatesInput } from "../../../inputs/FollowRequestScalarWhereWithAggregatesInput";
import { FollowRequestWhereInput } from "../../../inputs/FollowRequestWhereInput";
import { FollowRequestScalarFieldEnum } from "../../../../enums/FollowRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  where?: FollowRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: FollowRequestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowRequestScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "message"
    | "sourceUserId"
    | "targetUserId"
    | "createdAt"
    | "updatedAt"
  >;

  @TypeGraphQL.Field(_type => FollowRequestScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: FollowRequestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
