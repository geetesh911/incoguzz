import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTextualArgs } from "./args/CreateTextualArgs";
import { Textual } from "../../../models/Textual";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Textual)
export class CreateTextualResolver {
  @TypeGraphQL.Mutation(_returns => Textual, {
    nullable: false,
  })
  async createTextual(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateTextualArgs,
  ): Promise<Textual> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).textual.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
