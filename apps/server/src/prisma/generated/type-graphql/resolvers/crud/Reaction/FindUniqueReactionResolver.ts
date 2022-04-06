import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionArgs } from "./args/FindUniqueReactionArgs";
import { Reaction } from "../../../models/Reaction";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reaction)
export class FindUniqueReactionResolver {
  @TypeGraphQL.Query(_returns => Reaction, {
    nullable: true,
  })
  async reaction(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueReactionArgs,
  ): Promise<Reaction | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).reaction.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
