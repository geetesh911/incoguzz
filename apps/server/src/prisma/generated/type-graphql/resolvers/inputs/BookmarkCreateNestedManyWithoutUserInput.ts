import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateManyUserInputEnvelope } from "../inputs/BookmarkCreateManyUserInputEnvelope";
import { BookmarkCreateOrConnectWithoutUserInput } from "../inputs/BookmarkCreateOrConnectWithoutUserInput";
import { BookmarkCreateWithoutUserInput } from "../inputs/BookmarkCreateWithoutUserInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class BookmarkCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutUserInput], {
    nullable: true,
  })
  create?: BookmarkCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BookmarkCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true,
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;
}
