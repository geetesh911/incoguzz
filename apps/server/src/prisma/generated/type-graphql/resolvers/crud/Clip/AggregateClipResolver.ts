import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClipArgs } from "./args/AggregateClipArgs";
import { Clip } from "../../../models/Clip";
import { AggregateClip } from "../../outputs/AggregateClip";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clip)
export class AggregateClipResolver {
  @TypeGraphQL.Query(_returns => AggregateClip, {
    nullable: false,
  })
  async aggregateClip(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateClipArgs,
  ): Promise<AggregateClip> {
    return getPrismaFromContext(ctx).clip.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
