import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTextualArgs } from "./args/UpsertTextualArgs";
import { Textual } from "../../../models/Textual";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Textual)
export class UpsertTextualResolver {
  @TypeGraphQL.Mutation(_returns => Textual, {
    nullable: false,
  })
  async upsertTextual(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertTextualArgs,
  ): Promise<Textual> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).textual.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
