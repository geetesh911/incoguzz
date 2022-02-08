import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBlockedArgs } from "./args/UpsertBlockedArgs";
import { Blocked } from "../../../models/Blocked";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blocked)
export class UpsertBlockedResolver {
  @TypeGraphQL.Mutation(_returns => Blocked, {
    nullable: false,
  })
  async upsertBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBlockedArgs,
  ): Promise<Blocked> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
