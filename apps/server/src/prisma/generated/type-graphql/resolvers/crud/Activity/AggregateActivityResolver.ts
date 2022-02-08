import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActivityArgs } from "./args/AggregateActivityArgs";
import { Activity } from "../../../models/Activity";
import { AggregateActivity } from "../../outputs/AggregateActivity";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Activity)
export class AggregateActivityResolver {
  @TypeGraphQL.Query(_returns => AggregateActivity, {
    nullable: false,
  })
  async aggregateActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActivityArgs,
  ): Promise<AggregateActivity> {
    return getPrismaFromContext(ctx).activity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
