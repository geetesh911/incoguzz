import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePhotoArgs } from "./args/AggregatePhotoArgs";
import { CreateManyPhotoArgs } from "./args/CreateManyPhotoArgs";
import { CreatePhotoArgs } from "./args/CreatePhotoArgs";
import { DeleteManyPhotoArgs } from "./args/DeleteManyPhotoArgs";
import { DeletePhotoArgs } from "./args/DeletePhotoArgs";
import { FindFirstPhotoArgs } from "./args/FindFirstPhotoArgs";
import { FindManyPhotoArgs } from "./args/FindManyPhotoArgs";
import { FindUniquePhotoArgs } from "./args/FindUniquePhotoArgs";
import { GroupByPhotoArgs } from "./args/GroupByPhotoArgs";
import { UpdateManyPhotoArgs } from "./args/UpdateManyPhotoArgs";
import { UpdatePhotoArgs } from "./args/UpdatePhotoArgs";
import { UpsertPhotoArgs } from "./args/UpsertPhotoArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Photo } from "../../../models/Photo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePhoto } from "../../outputs/AggregatePhoto";
import { PhotoGroupBy } from "../../outputs/PhotoGroupBy";

@TypeGraphQL.Resolver(_of => Photo)
export class PhotoCrudResolver {
  @TypeGraphQL.Query(_returns => Photo, {
    nullable: true,
  })
  async photo(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniquePhotoArgs,
  ): Promise<Photo | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Photo, {
    nullable: true,
  })
  async findFirstPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstPhotoArgs,
  ): Promise<Photo | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Photo], {
    nullable: false,
  })
  async photos(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyPhotoArgs,
  ): Promise<Photo[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false,
  })
  async createPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreatePhotoArgs,
  ): Promise<Photo> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyPhotoArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: true,
  })
  async deletePhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeletePhotoArgs,
  ): Promise<Photo | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: true,
  })
  async updatePhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdatePhotoArgs,
  ): Promise<Photo | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyPhotoArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyPhotoArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Photo, {
    nullable: false,
  })
  async upsertPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertPhotoArgs,
  ): Promise<Photo> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).photo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregatePhoto, {
    nullable: false,
  })
  async aggregatePhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregatePhotoArgs,
  ): Promise<AggregatePhoto> {
    return getPrismaFromContext(ctx).photo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [PhotoGroupBy], {
    nullable: false,
  })
  async groupByPhoto(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByPhotoArgs,
  ): Promise<PhotoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).photo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
