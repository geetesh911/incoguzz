import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AudioOrderByWithRelationInput", {
  isAbstract: true,
})
export class AudioOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByWithRelationInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  thumbnailUrl?: "asc" | "desc" | undefined;
}
