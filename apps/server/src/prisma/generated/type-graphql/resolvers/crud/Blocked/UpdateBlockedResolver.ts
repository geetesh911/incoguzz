import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateBlockedArgs } from "./args/UpdateBlockedArgs";
import { Blocked } from "../../../models/Blocked";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blocked)
export class UpdateBlockedResolver {
  @TypeGraphQL.Mutation(_returns => Blocked, {
    nullable: true,
  })
  async updateBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBlockedArgs,
  ): Promise<Blocked | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
