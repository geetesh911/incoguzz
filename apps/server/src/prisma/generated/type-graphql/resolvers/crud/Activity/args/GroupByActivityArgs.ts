import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityOrderByWithAggregationInput } from "../../../inputs/ActivityOrderByWithAggregationInput";
import { ActivityScalarWhereWithAggregatesInput } from "../../../inputs/ActivityScalarWhereWithAggregatesInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
import { ActivityScalarFieldEnum } from "../../../../enums/ActivityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActivityArgs {
  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  where?: ActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActivityOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ActivityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "type" | "userId" | "postId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ActivityScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ActivityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
