import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreatePollArgs } from "./args/CreatePollArgs";
import { Poll } from "../../../models/Poll";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Poll)
export class CreatePollResolver {
  @TypeGraphQL.Mutation(_returns => Poll, {
    nullable: false,
  })
  async createPoll(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreatePollArgs,
  ): Promise<Poll> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).poll.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
