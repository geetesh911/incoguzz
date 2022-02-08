import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTextualArgs } from "./args/AggregateTextualArgs";
import { Textual } from "../../../models/Textual";
import { AggregateTextual } from "../../outputs/AggregateTextual";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Textual)
export class AggregateTextualResolver {
  @TypeGraphQL.Query(_returns => AggregateTextual, {
    nullable: false,
  })
  async aggregateTextual(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTextualArgs,
  ): Promise<AggregateTextual> {
    return getPrismaFromContext(ctx).textual.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
