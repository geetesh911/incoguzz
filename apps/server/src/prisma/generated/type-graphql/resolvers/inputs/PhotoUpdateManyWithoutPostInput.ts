import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateManyPostInputEnvelope } from "../inputs/PhotoCreateManyPostInputEnvelope";
import { PhotoCreateOrConnectWithoutPostInput } from "../inputs/PhotoCreateOrConnectWithoutPostInput";
import { PhotoCreateWithoutPostInput } from "../inputs/PhotoCreateWithoutPostInput";
import { PhotoScalarWhereInput } from "../inputs/PhotoScalarWhereInput";
import { PhotoUpdateManyWithWhereWithoutPostInput } from "../inputs/PhotoUpdateManyWithWhereWithoutPostInput";
import { PhotoUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PhotoUpdateWithWhereUniqueWithoutPostInput";
import { PhotoUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PhotoUpsertWithWhereUniqueWithoutPostInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType("PhotoUpdateManyWithoutPostInput", {
  isAbstract: true,
})
export class PhotoUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PhotoCreateWithoutPostInput], {
    nullable: true,
  })
  create?: PhotoCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: PhotoUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: PhotoCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  set?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  delete?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  connect?: PhotoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: PhotoUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: PhotoUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PhotoScalarWhereInput[] | undefined;
}
