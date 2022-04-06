import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityOrderByRelationAggregateInput } from "../inputs/ActivityOrderByRelationAggregateInput";
import { AudioOrderByWithRelationInput } from "../inputs/AudioOrderByWithRelationInput";
import { BookmarkOrderByRelationAggregateInput } from "../inputs/BookmarkOrderByRelationAggregateInput";
import { ClipOrderByWithRelationInput } from "../inputs/ClipOrderByWithRelationInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { PhotoOrderByRelationAggregateInput } from "../inputs/PhotoOrderByRelationAggregateInput";
import { PlaceOrderByWithRelationInput } from "../inputs/PlaceOrderByWithRelationInput";
import { PollOrderByWithRelationInput } from "../inputs/PollOrderByWithRelationInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { TagOrderByRelationAggregateInput } from "../inputs/TagOrderByRelationAggregateInput";
import { TextualOrderByWithRelationInput } from "../inputs/TextualOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VideoOrderByWithRelationInput } from "../inputs/VideoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithRelationInput", {
  isAbstract: true,
})
export class PostOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationInput | undefined;

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

  @TypeGraphQL.Field(_type => PlaceOrderByWithRelationInput, {
    nullable: true,
  })
  place?: PlaceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  placeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOrderByWithRelationInput, {
    nullable: true,
  })
  poll?: PollOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PhotoOrderByRelationAggregateInput, {
    nullable: true,
  })
  photos?: PhotoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoOrderByWithRelationInput, {
    nullable: true,
  })
  video?: VideoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ClipOrderByWithRelationInput, {
    nullable: true,
  })
  clip?: ClipOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TextualOrderByWithRelationInput, {
    nullable: true,
  })
  textual?: TextualOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AudioOrderByWithRelationInput, {
    nullable: true,
  })
  audio?: AudioOrderByWithRelationInput | undefined;

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
}
