import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityUpdateManyWithoutPostInput } from "../inputs/ActivityUpdateManyWithoutPostInput";
import { AudioUpdateOneWithoutPostInput } from "../inputs/AudioUpdateOneWithoutPostInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ClipUpdateOneWithoutPostInput } from "../inputs/ClipUpdateOneWithoutPostInput";
import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPostTypeFieldUpdateOperationsInput } from "../inputs/EnumPostTypeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutPostInput } from "../inputs/MessageUpdateManyWithoutPostInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PhotoUpdateManyWithoutPostInput } from "../inputs/PhotoUpdateManyWithoutPostInput";
import { PlaceUpdateOneWithoutPostsInput } from "../inputs/PlaceUpdateOneWithoutPostsInput";
import { PollUpdateOneWithoutPostInput } from "../inputs/PollUpdateOneWithoutPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutPostsInput } from "../inputs/TagUpdateManyWithoutPostsInput";
import { TextualUpdateOneWithoutPostInput } from "../inputs/TextualUpdateOneWithoutPostInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";
import { VideoUpdateOneWithoutPostInput } from "../inputs/VideoUpdateOneWithoutPostInput";

@TypeGraphQL.InputType("PostUpdateWithoutLikesInput", {
  isAbstract: true,
})
export class PostUpdateWithoutLikesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  caption?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPostTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  type?: EnumPostTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  archive?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  tags?: TagUpdateManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceUpdateOneWithoutPostsInput, {
    nullable: true,
  })
  place?: PlaceUpdateOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateOneWithoutPostInput, {
    nullable: true,
  })
  poll?: PollUpdateOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PhotoUpdateManyWithoutPostInput, {
    nullable: true,
  })
  photos?: PhotoUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateOneWithoutPostInput, {
    nullable: true,
  })
  video?: VideoUpdateOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ClipUpdateOneWithoutPostInput, {
    nullable: true,
  })
  clip?: ClipUpdateOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => TextualUpdateOneWithoutPostInput, {
    nullable: true,
  })
  textual?: TextualUpdateOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AudioUpdateOneWithoutPostInput, {
    nullable: true,
  })
  audio?: AudioUpdateOneWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ActivityUpdateManyWithoutPostInput, {
    nullable: true,
  })
  activities?: ActivityUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutPostInput, {
    nullable: true,
  })
  message?: MessageUpdateManyWithoutPostInput | undefined;
}
