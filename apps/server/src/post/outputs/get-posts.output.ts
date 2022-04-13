import PaginatedResponse from "@/common/generic-types/pagination-response.generic";
import {
  Audio,
  Bookmark,
  Photo,
  Place,
  PostCount,
  PostType,
  Reaction,
  Tag,
  Textual,
  Video,
} from "@/prisma/generated/type-graphql";
import { Field, Int, ObjectType } from "type-graphql";
import ClipOutput from "./clip.output";
import PollOutput from "./poll.output";

@ObjectType()
export class PostOutput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: true })
  caption?: string | null;

  @Field(() => PostType, { nullable: false })
  type!: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO";

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => Place, { nullable: true })
  place?: Place | null;

  @Field(() => PollOutput, { nullable: true })
  poll?: PollOutput | null;

  @Field(() => [Photo], { nullable: true })
  photos?: Photo[];

  @Field(() => Video, { nullable: true })
  video?: Video | null;

  @Field(() => ClipOutput, { nullable: true })
  clip?: ClipOutput | null;

  @Field(() => Textual, { nullable: true })
  textual?: Textual | null;

  @Field(() => Audio, { nullable: true })
  audio?: Audio | null;

  @Field(() => [Bookmark], { nullable: true })
  bookmarks?: Bookmark[] | null;

  @Field(() => [Reaction], { nullable: true })
  reactions?: Reaction[] | null;

  @Field(() => Int, { nullable: false })
  views?: number;

  @Field(() => PostCount, { nullable: true })
  _count?: PostCount | null;
}

@ObjectType()
class GetPostsOutput extends PaginatedResponse(PostOutput) {}

export default GetPostsOutput;
