import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueClipAudioArgs } from "./args/FindUniqueClipAudioArgs";
import { ClipAudio } from "../../../models/ClipAudio";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClipAudio)
export class FindUniqueClipAudioResolver {
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
}
