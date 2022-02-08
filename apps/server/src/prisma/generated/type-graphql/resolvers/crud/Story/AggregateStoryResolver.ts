import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStoryArgs } from "./args/AggregateStoryArgs";
import { Story } from "../../../models/Story";
import { AggregateStory } from "../../outputs/AggregateStory";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Story)
export class AggregateStoryResolver {
  @TypeGraphQL.Query(_returns => AggregateStory, {
    nullable: false,
  })
  async aggregateStory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateStoryArgs,
  ): Promise<AggregateStory> {
    return getPrismaFromContext(ctx).story.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
