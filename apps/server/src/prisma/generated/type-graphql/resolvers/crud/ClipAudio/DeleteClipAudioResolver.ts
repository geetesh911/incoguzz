import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteClipAudioArgs } from "./args/DeleteClipAudioArgs";
import { ClipAudio } from "../../../models/ClipAudio";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClipAudio)
export class DeleteClipAudioResolver {
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
}
