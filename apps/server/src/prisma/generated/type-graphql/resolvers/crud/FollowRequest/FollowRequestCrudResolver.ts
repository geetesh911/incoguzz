import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFollowRequestArgs } from "./args/AggregateFollowRequestArgs";
import { CreateFollowRequestArgs } from "./args/CreateFollowRequestArgs";
import { CreateManyFollowRequestArgs } from "./args/CreateManyFollowRequestArgs";
import { DeleteFollowRequestArgs } from "./args/DeleteFollowRequestArgs";
import { DeleteManyFollowRequestArgs } from "./args/DeleteManyFollowRequestArgs";
import { FindFirstFollowRequestArgs } from "./args/FindFirstFollowRequestArgs";
import { FindManyFollowRequestArgs } from "./args/FindManyFollowRequestArgs";
import { FindUniqueFollowRequestArgs } from "./args/FindUniqueFollowRequestArgs";
import { GroupByFollowRequestArgs } from "./args/GroupByFollowRequestArgs";
import { UpdateFollowRequestArgs } from "./args/UpdateFollowRequestArgs";
import { UpdateManyFollowRequestArgs } from "./args/UpdateManyFollowRequestArgs";
import { UpsertFollowRequestArgs } from "./args/UpsertFollowRequestArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { FollowRequest } from "../../../models/FollowRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFollowRequest } from "../../outputs/AggregateFollowRequest";
import { FollowRequestGroupBy } from "../../outputs/FollowRequestGroupBy";

@TypeGraphQL.Resolver(_of => FollowRequest)
export class FollowRequestCrudResolver {
  @TypeGraphQL.Query(_returns => FollowRequest, {
    nullable: true,
  })
  async followRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueFollowRequestArgs,
  ): Promise<FollowRequest | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FollowRequest, {
    nullable: true,
  })
  async findFirstFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstFollowRequestArgs,
  ): Promise<FollowRequest | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FollowRequest], {
    nullable: false,
  })
  async followRequests(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyFollowRequestArgs,
  ): Promise<FollowRequest[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FollowRequest, {
    nullable: false,
  })
  async createFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateFollowRequestArgs,
  ): Promise<FollowRequest> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyFollowRequestArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FollowRequest, {
    nullable: true,
  })
  async deleteFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteFollowRequestArgs,
  ): Promise<FollowRequest | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FollowRequest, {
    nullable: true,
  })
  async updateFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateFollowRequestArgs,
  ): Promise<FollowRequest | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyFollowRequestArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyFollowRequestArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FollowRequest, {
    nullable: false,
  })
  async upsertFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertFollowRequestArgs,
  ): Promise<FollowRequest> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateFollowRequest, {
    nullable: false,
  })
  async aggregateFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateFollowRequestArgs,
  ): Promise<AggregateFollowRequest> {
    return getPrismaFromContext(ctx).followRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [FollowRequestGroupBy], {
    nullable: false,
  })
  async groupByFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByFollowRequestArgs,
  ): Promise<FollowRequestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).followRequest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
