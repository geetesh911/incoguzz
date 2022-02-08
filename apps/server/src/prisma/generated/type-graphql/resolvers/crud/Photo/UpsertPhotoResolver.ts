import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertPhotoArgs } from "./args/UpsertPhotoArgs";
import { Photo } from "../../../models/Photo";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class UpsertPhotoResolver {
  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false,
  })
  async upsertPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertPhotoArgs,
  ): Promise<Photo> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
