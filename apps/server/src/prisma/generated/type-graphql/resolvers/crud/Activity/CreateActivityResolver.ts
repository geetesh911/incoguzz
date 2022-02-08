import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateActivityArgs } from "./args/CreateActivityArgs";
import { Activity } from "../../../models/Activity";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Activity)
export class CreateActivityResolver {
  @TypeGraphQL.Mutation(_returns => Activity, {
    nullable: false,
  })
  async createActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActivityArgs,
  ): Promise<Activity> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).activity.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
