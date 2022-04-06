import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityListRelationFilter } from "../inputs/ActivityListRelationFilter";
import { AudioRelationFilter } from "../inputs/AudioRelationFilter";
import { BookmarkListRelationFilter } from "../inputs/BookmarkListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { ClipRelationFilter } from "../inputs/ClipRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPostTypeFilter } from "../inputs/EnumPostTypeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { PhotoListRelationFilter } from "../inputs/PhotoListRelationFilter";
import { PlaceRelationFilter } from "../inputs/PlaceRelationFilter";
import { PollRelationFilter } from "../inputs/PollRelationFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";
import { TextualRelationFilter } from "../inputs/TextualRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VideoRelationFilter } from "../inputs/VideoRelationFilter";

@TypeGraphQL.InputType("PostWhereInput", {
  isAbstract: true,
})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true,
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true,
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true,
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  caption?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPostTypeFilter, {
    nullable: true,
  })
  type?: EnumPostTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TagListRelationFilter, {
    nullable: true,
  })
  tags?: TagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlaceRelationFilter, {
    nullable: true,
  })
  place?: PlaceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  placeId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PollRelationFilter, {
    nullable: true,
  })
  poll?: PollRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PhotoListRelationFilter, {
    nullable: true,
  })
  photos?: PhotoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VideoRelationFilter, {
    nullable: true,
  })
  video?: VideoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ClipRelationFilter, {
    nullable: true,
  })
  clip?: ClipRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TextualRelationFilter, {
    nullable: true,
  })
  textual?: TextualRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AudioRelationFilter, {
    nullable: true,
  })
  audio?: AudioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionListRelationFilter, {
    nullable: true,
  })
  reactions?: ReactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookmarkListRelationFilter, {
    nullable: true,
  })
  bookmarks?: BookmarkListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActivityListRelationFilter, {
    nullable: true,
  })
  activities?: ActivityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true,
  })
  archive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true,
  })
  published?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true,
  })
  message?: MessageListRelationFilter | undefined;
}
