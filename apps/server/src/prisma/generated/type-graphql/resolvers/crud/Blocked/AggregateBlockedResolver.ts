import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBlockedArgs } from "./args/AggregateBlockedArgs";
import { Blocked } from "../../../models/Blocked";
import { AggregateBlocked } from "../../outputs/AggregateBlocked";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blocked)
export class AggregateBlockedResolver {
  @TypeGraphQL.Query(_returns => AggregateBlocked, {
    nullable: false,
  })
  async aggregateBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBlockedArgs,
  ): Promise<AggregateBlocked> {
    return getPrismaFromContext(ctx).blocked.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
