import * as TypeGraphQL from "type-graphql";
import { Photo } from "../../../models/Photo";
import { Post } from "../../../models/Post";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Photo)
export class PhotoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() photo: Photo,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .photo.findUnique({
        where: {
          id: photo.id,
        },
      })
      .post({});
  }
}
