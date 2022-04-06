import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkCreateManyUserInput } from "../inputs/BookmarkCreateManyUserInput";

@TypeGraphQL.InputType("BookmarkCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class BookmarkCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookmarkCreateManyUserInput], {
    nullable: false,
  })
  data!: BookmarkCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
