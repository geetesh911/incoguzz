import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPlaceInputEnvelope } from "../inputs/PostCreateManyPlaceInputEnvelope";
import { PostCreateOrConnectWithoutPlaceInput } from "../inputs/PostCreateOrConnectWithoutPlaceInput";
import { PostCreateWithoutPlaceInput } from "../inputs/PostCreateWithoutPlaceInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutPlaceInput } from "../inputs/PostUpdateManyWithWhereWithoutPlaceInput";
import { PostUpdateWithWhereUniqueWithoutPlaceInput } from "../inputs/PostUpdateWithWhereUniqueWithoutPlaceInput";
import { PostUpsertWithWhereUniqueWithoutPlaceInput } from "../inputs/PostUpsertWithWhereUniqueWithoutPlaceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutPlaceInput", {
  isAbstract: true,
})
export class PostUpdateManyWithoutPlaceInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPlaceInput], {
    nullable: true,
  })
  create?: PostCreateWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPlaceInput], {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutPlaceInput], {
    nullable: true,
  })
  upsert?: PostUpsertWithWhereUniqueWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyPlaceInputEnvelope, {
    nullable: true,
  })
  createMany?: PostCreateManyPlaceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutPlaceInput], {
    nullable: true,
  })
  update?: PostUpdateWithWhereUniqueWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutPlaceInput], {
    nullable: true,
  })
  updateMany?: PostUpdateManyWithWhereWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
