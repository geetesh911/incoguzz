import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertStoryArgs } from "./args/UpsertStoryArgs";
import { Story } from "../../../models/Story";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Story)
export class UpsertStoryResolver {
  @TypeGraphQL.Mutation(_returns => Story, {
    nullable: false,
  })
  async upsertStory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertStoryArgs,
  ): Promise<Story> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).story.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
