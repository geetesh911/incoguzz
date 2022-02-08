import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePollOptionArgs } from "./args/AggregatePollOptionArgs";
import { PollOption } from "../../../models/PollOption";
import { AggregatePollOption } from "../../outputs/AggregatePollOption";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollOption)
export class AggregatePollOptionResolver {
  @TypeGraphQL.Query(_returns => AggregatePollOption, {
    nullable: false,
  })
  async aggregatePollOption(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregatePollOptionArgs,
  ): Promise<AggregatePollOption> {
    return getPrismaFromContext(ctx).pollOption.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
