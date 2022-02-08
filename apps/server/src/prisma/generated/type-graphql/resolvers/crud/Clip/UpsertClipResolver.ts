import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertClipArgs } from "./args/UpsertClipArgs";
import { Clip } from "../../../models/Clip";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clip)
export class UpsertClipResolver {
  @TypeGraphQL.Mutation(_returns => Clip, {
    nullable: false,
  })
  async upsertClip(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertClipArgs,
  ): Promise<Clip> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clip.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
