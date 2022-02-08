import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertClipAudioArgs } from "./args/UpsertClipAudioArgs";
import { ClipAudio } from "../../../models/ClipAudio";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClipAudio)
export class UpsertClipAudioResolver {
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
}
