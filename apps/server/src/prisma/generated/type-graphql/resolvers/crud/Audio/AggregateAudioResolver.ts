import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAudioArgs } from "./args/AggregateAudioArgs";
import { Audio } from "../../../models/Audio";
import { AggregateAudio } from "../../outputs/AggregateAudio";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Audio)
export class AggregateAudioResolver {
  @TypeGraphQL.Query(_returns => AggregateAudio, {
    nullable: false,
  })
  async aggregateAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAudioArgs,
  ): Promise<AggregateAudio> {
    return getPrismaFromContext(ctx).audio.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
