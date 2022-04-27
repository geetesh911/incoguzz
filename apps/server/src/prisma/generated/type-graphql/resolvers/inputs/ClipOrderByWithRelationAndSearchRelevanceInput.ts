import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ClipAudioOrderByWithRelationAndSearchRelevanceInput";
import { ClipOrderByRelevanceInput } from "../inputs/ClipOrderByRelevanceInput";
import { PostOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PostOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class ClipOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  thumbnailUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    _type => ClipAudioOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  clipAudio?: ClipAudioOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  clipAudioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClipOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: ClipOrderByRelevanceInput | undefined;
}
