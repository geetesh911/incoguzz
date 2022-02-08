import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVideoArgs } from "./args/AggregateVideoArgs";
import { Video } from "../../../models/Video";
import { AggregateVideo } from "../../outputs/AggregateVideo";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Video)
export class AggregateVideoResolver {
  @TypeGraphQL.Query(_returns => AggregateVideo, {
    nullable: false,
  })
  async aggregateVideo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateVideoArgs,
  ): Promise<AggregateVideo> {
    return getPrismaFromContext(ctx).video.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
