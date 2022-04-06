import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookmarkCreateManyInput } from "../../../inputs/BookmarkCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookmarkArgs {
  @TypeGraphQL.Field(_type => [BookmarkCreateManyInput], {
    nullable: false,
  })
  data!: BookmarkCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
