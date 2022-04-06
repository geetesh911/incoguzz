import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateManyPostInput } from "../inputs/BookmarkCreateManyPostInput";

@TypeGraphQL.InputType("BookmarkCreateManyPostInputEnvelope", {
  isAbstract: true,
})
export class BookmarkCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [BookmarkCreateManyPostInput], {
    nullable: false,
  })
  data!: BookmarkCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
