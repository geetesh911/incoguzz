import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateManyUserInputEnvelope } from "../inputs/CommentRepliesCreateManyUserInputEnvelope";
import { CommentRepliesCreateOrConnectWithoutUserInput } from "../inputs/CommentRepliesCreateOrConnectWithoutUserInput";
import { CommentRepliesCreateWithoutUserInput } from "../inputs/CommentRepliesCreateWithoutUserInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentRepliesCreateWithoutUserInput], {
    nullable: true,
  })
  create?: CommentRepliesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: CommentRepliesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: CommentRepliesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereUniqueInput], {
    nullable: true,
  })
  connect?: CommentRepliesWhereUniqueInput[] | undefined;
}
