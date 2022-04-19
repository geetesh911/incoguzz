import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Activity } from "../models/Activity";
import { Audio } from "../models/Audio";
import { Bookmark } from "../models/Bookmark";
import { Clip } from "../models/Clip";
import { Comment } from "../models/Comment";
import { Message } from "../models/Message";
import { Photo } from "../models/Photo";
import { Place } from "../models/Place";
import { Poll } from "../models/Poll";
import { Reaction } from "../models/Reaction";
import { Tag } from "../models/Tag";
import { Textual } from "../models/Textual";
import { User } from "../models/User";
import { Video } from "../models/Video";
import { PostType } from "../enums/PostType";
import { PostCount } from "../resolvers/outputs/PostCount";

@TypeGraphQL.ObjectType("Post", {
  isAbstract: true,
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  caption?: string | null;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false,
  })
  type!: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  tags?: Tag[];

  place?: Place | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  placeId?: string | null;

  poll?: Poll | null;

  photos?: Photo[];

  video?: Video | null;

  clip?: Clip | null;

  textual?: Textual | null;

  audio?: Audio | null;

  reactions?: Reaction[];

  bookmarks?: Bookmark[];

  comments?: Comment[];

  activities?: Activity[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  archive!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  slug!: string;

  message?: Message[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  views!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  metaTags?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => PostCount, {
    nullable: true,
  })
  _count?: PostCount | null;
}
