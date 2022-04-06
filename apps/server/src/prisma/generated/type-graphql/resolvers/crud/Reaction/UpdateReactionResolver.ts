import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateReactionArgs } from "./args/UpdateReactionArgs";
import { Reaction } from "../../../models/Reaction";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reaction)
export class UpdateReactionResolver {
  @TypeGraphQL.Mutation(_returns => Reaction, {
    nullable: true,
  })
  async updateReaction(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateReactionArgs,
  ): Promise<Reaction | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).reaction.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
