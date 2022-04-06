import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateManyPostInputEnvelope } from "../inputs/BookmarkCreateManyPostInputEnvelope";
import { BookmarkCreateOrConnectWithoutPostInput } from "../inputs/BookmarkCreateOrConnectWithoutPostInput";
import { BookmarkCreateWithoutPostInput } from "../inputs/BookmarkCreateWithoutPostInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutPostInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutPostInput";
import { BookmarkUpdateWithWhereUniqueWithoutPostInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutPostInput";
import { BookmarkUpsertWithWhereUniqueWithoutPostInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateManyWithoutPostInput", {
  isAbstract: true,
})
export class BookmarkUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutPostInput], {
    nullable: true,
  })
  create?: BookmarkCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: BookmarkUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: BookmarkCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true,
  })
  set?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true,
  })
  delete?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true,
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: BookmarkUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: BookmarkUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
