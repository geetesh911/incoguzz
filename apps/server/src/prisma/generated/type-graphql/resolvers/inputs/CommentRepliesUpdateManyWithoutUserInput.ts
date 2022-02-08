import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateManyUserInputEnvelope } from "../inputs/CommentRepliesCreateManyUserInputEnvelope";
import { CommentRepliesCreateOrConnectWithoutUserInput } from "../inputs/CommentRepliesCreateOrConnectWithoutUserInput";
import { CommentRepliesCreateWithoutUserInput } from "../inputs/CommentRepliesCreateWithoutUserInput";
import { CommentRepliesScalarWhereInput } from "../inputs/CommentRepliesScalarWhereInput";
import { CommentRepliesUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentRepliesUpdateManyWithWhereWithoutUserInput";
import { CommentRepliesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentRepliesUpdateWithWhereUniqueWithoutUserInput";
import { CommentRepliesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentRepliesUpsertWithWhereUniqueWithoutUserInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class CommentRepliesUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentRepliesCreateWithoutUserInput], {
    nullable: true,
  })
  create?: CommentRepliesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: CommentRepliesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: CommentRepliesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: CommentRepliesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereUniqueInput], {
    nullable: true,
  })
  set?: CommentRepliesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CommentRepliesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereUniqueInput], {
    nullable: true,
  })
  delete?: CommentRepliesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereUniqueInput], {
    nullable: true,
  })
  connect?: CommentRepliesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: CommentRepliesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesUpdateManyWithWhereWithoutUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: CommentRepliesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CommentRepliesScalarWhereInput[] | undefined;
}
