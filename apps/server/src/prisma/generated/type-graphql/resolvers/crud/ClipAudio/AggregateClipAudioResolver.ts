import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClipAudioArgs } from "./args/AggregateClipAudioArgs";
import { ClipAudio } from "../../../models/ClipAudio";
import { AggregateClipAudio } from "../../outputs/AggregateClipAudio";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClipAudio)
export class AggregateClipAudioResolver {
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
}
