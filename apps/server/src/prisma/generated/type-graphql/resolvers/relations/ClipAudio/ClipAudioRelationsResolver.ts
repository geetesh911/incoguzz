import * as TypeGraphQL from "type-graphql";
import { Clip } from "../../../models/Clip";
import { ClipAudio } from "../../../models/ClipAudio";
import { ClipAudioClipsArgs } from "./args/ClipAudioClipsArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClipAudio)
export class ClipAudioRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Clip], {
    nullable: false,
  })
  async clips(
    @TypeGraphQL.Root() clipAudio: ClipAudio,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: ClipAudioClipsArgs,
  ): Promise<Clip[]> {
    return getPrismaFromContext(ctx)
      .clipAudio.findUnique({
        where: {
          id: clipAudio.id,
        },
      })
      .clips(args);
  }
}
