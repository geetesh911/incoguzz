import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateVideoArgs } from "./args/CreateVideoArgs";
import { Video } from "../../../models/Video";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Video)
export class CreateVideoResolver {
  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: false,
  })
  async createVideo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateVideoArgs,
  ): Promise<Video> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).video.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
