import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateLikeArgs } from "./args/CreateLikeArgs";
import { Like } from "../../../models/Like";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Like)
export class CreateLikeResolver {
  @TypeGraphQL.Mutation(_returns => Like, {
    nullable: false,
  })
  async createLike(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateLikeArgs,
  ): Promise<Like> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).like.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
