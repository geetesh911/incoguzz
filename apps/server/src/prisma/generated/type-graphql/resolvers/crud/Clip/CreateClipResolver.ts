import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateClipArgs } from "./args/CreateClipArgs";
import { Clip } from "../../../models/Clip";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clip)
export class CreateClipResolver {
  @TypeGraphQL.Mutation(_returns => Clip, {
    nullable: false,
  })
  async createClip(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateClipArgs,
  ): Promise<Clip> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clip.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
