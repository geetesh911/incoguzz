import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCreateManyRepliedToInputEnvelope } from "../inputs/CommentRepliesCreateManyRepliedToInputEnvelope";
import { CommentRepliesCreateOrConnectWithoutRepliedToInput } from "../inputs/CommentRepliesCreateOrConnectWithoutRepliedToInput";
import { CommentRepliesCreateWithoutRepliedToInput } from "../inputs/CommentRepliesCreateWithoutRepliedToInput";
import { CommentRepliesWhereUniqueInput } from "../inputs/CommentRepliesWhereUniqueInput";

@TypeGraphQL.InputType("CommentRepliesCreateNestedManyWithoutRepliedToInput", {
  isAbstract: true,
})
export class CommentRepliesCreateNestedManyWithoutRepliedToInput {
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

  @TypeGraphQL.Field(_type => CommentRepliesCreateManyRepliedToInputEnvelope, {
    nullable: true,
  })
  createMany?: CommentRepliesCreateManyRepliedToInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentRepliesWhereUniqueInput], {
    nullable: true,
  })
  connect?: CommentRepliesWhereUniqueInput[] | undefined;
}
