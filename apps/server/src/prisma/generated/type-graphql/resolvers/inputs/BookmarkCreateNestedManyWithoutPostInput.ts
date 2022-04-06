import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateManyPostInputEnvelope } from "../inputs/BookmarkCreateManyPostInputEnvelope";
import { BookmarkCreateOrConnectWithoutPostInput } from "../inputs/BookmarkCreateOrConnectWithoutPostInput";
import { BookmarkCreateWithoutPostInput } from "../inputs/BookmarkCreateWithoutPostInput";
import { BookmarkWhereUniqueInput } from "../inputs/BookmarkWhereUniqueInput";

@TypeGraphQL.InputType("BookmarkCreateNestedManyWithoutPostInput", {
  isAbstract: true,
})
export class BookmarkCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [BookmarkCreateWithoutPostInput], {
    nullable: true,
  })
  create?: BookmarkCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookmarkCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: BookmarkCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookmarkWhereUniqueInput], {
    nullable: true,
  })
  connect?: BookmarkWhereUniqueInput[] | undefined;
}
