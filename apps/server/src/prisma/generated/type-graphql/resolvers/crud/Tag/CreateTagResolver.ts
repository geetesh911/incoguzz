import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTagArgs } from "./args/CreateTagArgs";
import { Tag } from "../../../models/Tag";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class CreateTagResolver {
  @TypeGraphQL.Mutation(_returns => Tag, {
    nullable: false,
  })
  async createTag(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateTagArgs,
  ): Promise<Tag> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).tag.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
