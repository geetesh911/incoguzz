import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityOrderByRelationAggregateInput } from "../inputs/ActivityOrderByRelationAggregateInput";
import { AudioOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AudioOrderByWithRelationAndSearchRelevanceInput";
import { BookmarkOrderByRelationAggregateInput } from "../inputs/BookmarkOrderByRelationAggregateInput";
import { ClipOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ClipOrderByWithRelationAndSearchRelevanceInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { PhotoOrderByRelationAggregateInput } from "../inputs/PhotoOrderByRelationAggregateInput";
import { PlaceOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PlaceOrderByWithRelationAndSearchRelevanceInput";
import { PollOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PollOrderByWithRelationAndSearchRelevanceInput";
import { PostOrderByRelevanceInput } from "../inputs/PostOrderByRelevanceInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { TagOrderByRelationAggregateInput } from "../inputs/TagOrderByRelationAggregateInput";
import { TextualOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TextualOrderByWithRelationAndSearchRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { VideoOrderByWithRelationAndSearchRelevanceInput } from "../inputs/VideoOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class PostOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  caption?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TagOrderByRelationAggregateInput, {
    nullable: true,
  })
  tags?: TagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaceOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  place?: PlaceOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  placeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  poll?: PollOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => PhotoOrderByRelationAggregateInput, {
    nullable: true,
  })
  photos?: PhotoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  video?: VideoOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ClipOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  clip?: ClipOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(
    _type => TextualOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  textual?: TextualOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => AudioOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  audio?: AudioOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput, {
    nullable: true,
  })
  reactions?: ReactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkOrderByRelationAggregateInput, {
    nullable: true,
  })
  bookmarks?: BookmarkOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityOrderByRelationAggregateInput, {
    nullable: true,
  })
  activities?: ActivityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  archive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true,
  })
  message?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  views?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  metaTags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: PostOrderByRelevanceInput | undefined;
}
