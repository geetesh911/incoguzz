import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateNestedManyWithoutPostInput } from "../inputs/ActivityCreateNestedManyWithoutPostInput";
import { AudioCreateNestedOneWithoutPostInput } from "../inputs/AudioCreateNestedOneWithoutPostInput";
import { BookmarkCreateNestedManyWithoutPostInput } from "../inputs/BookmarkCreateNestedManyWithoutPostInput";
import { ClipCreateNestedOneWithoutPostInput } from "../inputs/ClipCreateNestedOneWithoutPostInput";
import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { MessageCreateNestedManyWithoutPostInput } from "../inputs/MessageCreateNestedManyWithoutPostInput";
import { PhotoCreateNestedManyWithoutPostInput } from "../inputs/PhotoCreateNestedManyWithoutPostInput";
import { PlaceCreateNestedOneWithoutPostsInput } from "../inputs/PlaceCreateNestedOneWithoutPostsInput";
import { PollCreateNestedOneWithoutPostInput } from "../inputs/PollCreateNestedOneWithoutPostInput";
import { TagCreateNestedManyWithoutPostsInput } from "../inputs/TagCreateNestedManyWithoutPostsInput";
import { TextualCreateNestedOneWithoutPostInput } from "../inputs/TextualCreateNestedOneWithoutPostInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
import { VideoCreateNestedOneWithoutPostInput } from "../inputs/VideoCreateNestedOneWithoutPostInput";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("PostCreateWithoutReactionsInput", {
  isAbstract: true,
})
export class PostCreateWithoutReactionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  caption?: string | undefined;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false,
  })
  type!: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  tags?: TagCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceCreateNestedOneWithoutPostsInput, {
    nullable: true,
  })
  place?: PlaceCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PollCreateNestedOneWithoutPostInput, {
    nullable: true,
  })
  poll?: PollCreateNestedOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  photos?: PhotoCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutPostInput, {
    nullable: true,
  })
  video?: VideoCreateNestedOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ClipCreateNestedOneWithoutPostInput, {
    nullable: true,
  })
  clip?: ClipCreateNestedOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => TextualCreateNestedOneWithoutPostInput, {
    nullable: true,
  })
  textual?: TextualCreateNestedOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AudioCreateNestedOneWithoutPostInput, {
    nullable: true,
  })
  audio?: AudioCreateNestedOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  bookmarks?: BookmarkCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ActivityCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  activities?: ActivityCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  archive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  message?: MessageCreateNestedManyWithoutPostInput | undefined;
}
