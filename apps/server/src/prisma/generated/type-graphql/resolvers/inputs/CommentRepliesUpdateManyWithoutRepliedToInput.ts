import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateManyRepliedToInputEnvelope } from "../inputs/CommentRepliesCreateManyRepliedToInputEnvelope";
import { CommentRepliesCreateOrConnectWithoutRepliedToInput } from "../inputs/CommentRepliesCreateOrConnectWithoutRepliedToInput";
import { CommentRepliesCreateWithoutRepliedToInput } from "../inputs/CommentRepliesCreateWithoutRepliedToInput";
import { CommentRepliesScalarWhereInput } from "../inputs/CommentRepliesScalarWhereInput";
import { CommentRepliesUpdateManyWithWhereWithoutRepliedToInput } from "../inputs/CommentRepliesUpdateManyWithWhereWithoutRepliedToInput";
import { CommentRepliesUpdateWithWhereUniqueWithoutRepliedToInput } from "../inputs/CommentRepliesUpdateWithWhereUniqueWithoutRepliedToInput";
import { CommentRepliesUpsertWithWhereUniqueWithoutRepliedToInput } from "../inputs/CommentRepliesUpsertWithWhereUniqueWithoutRepliedToInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesUpdateManyWithoutRepliedToInput", {
  isAbstract: true,
})
export class CommentRepliesUpdateManyWithoutRepliedToInput {
  @TypeGraphQL.Field(_type => [CommentRepliesCreateWithoutRepliedToInput], {
    nullable: true,
  })
  create?: CommentRepliesCreateWithoutRepliedToInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesCreateOrConnectWithoutRepliedToInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | CommentRepliesCreateOrConnectWithoutRepliedToInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesUpsertWithWhereUniqueWithoutRepliedToInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | CommentRepliesUpsertWithWhereUniqueWithoutRepliedToInput[]
    | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesCreateManyRepliedToInputEnvelope, {
    nullable: true,
  })
  createMany?: CommentRepliesCreateManyRepliedToInputEnvelope | undefined;

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
    _type => [CommentRepliesUpdateWithWhereUniqueWithoutRepliedToInput],
    {
      nullable: true,
    },
  )
  update?:
    | CommentRepliesUpdateWithWhereUniqueWithoutRepliedToInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [CommentRepliesUpdateManyWithWhereWithoutRepliedToInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | CommentRepliesUpdateManyWithWhereWithoutRepliedToInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CommentRepliesScalarWhereInput[] | undefined;
}
