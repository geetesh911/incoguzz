import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBlockedArgs } from "./args/AggregateBlockedArgs";
import { CreateBlockedArgs } from "./args/CreateBlockedArgs";
import { CreateManyBlockedArgs } from "./args/CreateManyBlockedArgs";
import { DeleteBlockedArgs } from "./args/DeleteBlockedArgs";
import { DeleteManyBlockedArgs } from "./args/DeleteManyBlockedArgs";
import { FindFirstBlockedArgs } from "./args/FindFirstBlockedArgs";
import { FindManyBlockedArgs } from "./args/FindManyBlockedArgs";
import { FindUniqueBlockedArgs } from "./args/FindUniqueBlockedArgs";
import { GroupByBlockedArgs } from "./args/GroupByBlockedArgs";
import { UpdateBlockedArgs } from "./args/UpdateBlockedArgs";
import { UpdateManyBlockedArgs } from "./args/UpdateManyBlockedArgs";
import { UpsertBlockedArgs } from "./args/UpsertBlockedArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Blocked } from "../../../models/Blocked";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBlocked } from "../../outputs/AggregateBlocked";
import { BlockedGroupBy } from "../../outputs/BlockedGroupBy";

@TypeGraphQL.Resolver(_of => Blocked)
export class BlockedCrudResolver {
  @TypeGraphQL.Query(_returns => Blocked, {
    nullable: true,
  })
  async blocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBlockedArgs,
  ): Promise<Blocked | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Blocked, {
    nullable: true,
  })
  async findFirstBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBlockedArgs,
  ): Promise<Blocked | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Blocked], {
    nullable: false,
  })
  async blockeds(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBlockedArgs,
  ): Promise<Blocked[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Blocked, {
    nullable: false,
  })
  async createBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBlockedArgs,
  ): Promise<Blocked> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBlockedArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Blocked, {
    nullable: true,
  })
  async deleteBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBlockedArgs,
  ): Promise<Blocked | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBlockedArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBlockedArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).blocked.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateBlocked, {
    nullable: false,
  })
  async aggregateBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBlockedArgs,
  ): Promise<AggregateBlocked> {
    return getPrismaFromContext(ctx).blocked.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [BlockedGroupBy], {
    nullable: false,
  })
  async groupByBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBlockedArgs,
  ): Promise<BlockedGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).blocked.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
