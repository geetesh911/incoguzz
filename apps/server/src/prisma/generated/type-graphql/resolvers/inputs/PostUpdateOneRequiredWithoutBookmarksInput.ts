import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutBookmarksInput } from "../inputs/PostCreateOrConnectWithoutBookmarksInput";
import { PostCreateWithoutBookmarksInput } from "../inputs/PostCreateWithoutBookmarksInput";
import { PostUpdateWithoutBookmarksInput } from "../inputs/PostUpdateWithoutBookmarksInput";
import { PostUpsertWithoutBookmarksInput } from "../inputs/PostUpsertWithoutBookmarksInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutBookmarksInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput, {
    nullable: true,
  })
  create?: PostCreateWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutBookmarksInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutBookmarksInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutBookmarksInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutBookmarksInput | undefined;
}
