import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClipAudioArgs } from "./args/AggregateClipAudioArgs";
import { CreateClipAudioArgs } from "./args/CreateClipAudioArgs";
import { CreateManyClipAudioArgs } from "./args/CreateManyClipAudioArgs";
import { DeleteClipAudioArgs } from "./args/DeleteClipAudioArgs";
import { DeleteManyClipAudioArgs } from "./args/DeleteManyClipAudioArgs";
import { FindFirstClipAudioArgs } from "./args/FindFirstClipAudioArgs";
import { FindManyClipAudioArgs } from "./args/FindManyClipAudioArgs";
import { FindUniqueClipAudioArgs } from "./args/FindUniqueClipAudioArgs";
import { GroupByClipAudioArgs } from "./args/GroupByClipAudioArgs";
import { UpdateClipAudioArgs } from "./args/UpdateClipAudioArgs";
import { UpdateManyClipAudioArgs } from "./args/UpdateManyClipAudioArgs";
import { UpsertClipAudioArgs } from "./args/UpsertClipAudioArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { ClipAudio } from "../../../models/ClipAudio";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateClipAudio } from "../../outputs/AggregateClipAudio";
import { ClipAudioGroupBy } from "../../outputs/ClipAudioGroupBy";

@TypeGraphQL.Resolver(_of => ClipAudio)
export class ClipAudioCrudResolver {
  @TypeGraphQL.Query(_returns => ClipAudio, {
    nullable: true,
  })
  async clipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueClipAudioArgs,
  ): Promise<ClipAudio | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ClipAudio, {
    nullable: true,
  })
  async findFirstClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstClipAudioArgs,
  ): Promise<ClipAudio | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ClipAudio], {
    nullable: false,
  })
  async clipAudios(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyClipAudioArgs,
  ): Promise<ClipAudio[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClipAudio, {
    nullable: false,
  })
  async createClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateClipAudioArgs,
  ): Promise<ClipAudio> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyClipAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClipAudio, {
    nullable: true,
  })
  async deleteClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteClipAudioArgs,
  ): Promise<ClipAudio | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClipAudio, {
    nullable: true,
  })
  async updateClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateClipAudioArgs,
  ): Promise<ClipAudio | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyClipAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyClipAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClipAudio, {
    nullable: false,
  })
  async upsertClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertClipAudioArgs,
  ): Promise<ClipAudio> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).clipAudio.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateClipAudio, {
    nullable: false,
  })
  async aggregateClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateClipAudioArgs,
  ): Promise<AggregateClipAudio> {
    return getPrismaFromContext(ctx).clipAudio.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ClipAudioGroupBy], {
    nullable: false,
  })
  async groupByClipAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByClipAudioArgs,
  ): Promise<ClipAudioGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).clipAudio.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
