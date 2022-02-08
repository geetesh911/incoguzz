import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTagArgs } from "./args/UpsertTagArgs";
import { Tag } from "../../../models/Tag";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class UpsertTagResolver {
  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: false,
  })
  async upsertTag(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertTagArgs,
  ): Promise<Tag> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).tag.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
