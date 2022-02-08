import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreatePhotoArgs } from "./args/CreatePhotoArgs";
import { Photo } from "../../../models/Photo";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class CreatePhotoResolver {
  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false,
  })
  async createPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreatePhotoArgs,
  ): Promise<Photo> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
