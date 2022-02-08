import * as TypeGraphQL from "type-graphql";
import { Place } from "../../../models/Place";
import { Post } from "../../../models/Post";
import { PlacePostsArgs } from "./args/PlacePostsArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Place)
export class PlaceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() place: Place,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PlacePostsArgs,
  ): Promise<Post[]> {
    return getPrismaFromContext(ctx)
      .place.findUnique({
        where: {
          id: place.id,
        },
      })
      .posts(args);
  }
}
