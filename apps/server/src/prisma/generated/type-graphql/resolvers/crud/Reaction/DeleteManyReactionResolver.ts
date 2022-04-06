import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReactionArgs } from "./args/DeleteManyReactionArgs";
import { Reaction } from "../../../models/Reaction";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reaction)
export class DeleteManyReactionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyReaction(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyReactionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).reaction.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
