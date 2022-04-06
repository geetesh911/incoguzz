import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateManyUserInputEnvelope } from "../inputs/BookmarkCreateManyUserInputEnvelope";
import { BookmarkCreateOrConnectWithoutUserInput } from "../inputs/BookmarkCreateOrConnectWithoutUserInput";
import { BookmarkCreateWithoutUserInput } from "../inputs/BookmarkCreateWithoutUserInput";
import { BookmarkScalarWhereInput } from "../inputs/BookmarkScalarWhereInput";
import { BookmarkUpdateManyWithWhereWithoutUserInput } from "../inputs/BookmarkUpdateManyWithWhereWithoutUserInput";
import { BookmarkUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookmarkUpdateWithWhereUniqueWithoutUserInput";
import { BookmarkUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookmarkUpsertWithWhereUniqueWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class BookmarkUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutUserInput], {
    nullable: true,
  })
  create?: BookmarkCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BookmarkCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookmarkUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: BookmarkUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: BookmarkScalarWhereInput[] | undefined;
}
