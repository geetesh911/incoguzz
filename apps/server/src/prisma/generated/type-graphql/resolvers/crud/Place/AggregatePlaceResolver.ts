import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlaceArgs } from "./args/AggregatePlaceArgs";
import { Place } from "../../../models/Place";
import { AggregatePlace } from "../../outputs/AggregatePlace";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Place)
export class AggregatePlaceResolver {
  @TypeGraphQL.Query(_returns => AggregatePlace, {
    nullable: false,
  })
  async aggregatePlace(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregatePlaceArgs,
  ): Promise<AggregatePlace> {
    return getPrismaFromContext(ctx).place.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
