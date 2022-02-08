import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreatePlaceArgs } from "./args/CreatePlaceArgs";
import { Place } from "../../../models/Place";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Place)
export class CreatePlaceResolver {
  @TypeGraphQL.Mutation(_returns => Place, {
    nullable: false,
  })
  async createPlace(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreatePlaceArgs,
  ): Promise<Place> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).place.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
