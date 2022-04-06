import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Activity } from "../models/Activity";
import { Blocked } from "../models/Blocked";
import { Bookmark } from "../models/Bookmark";
import { Comment } from "../models/Comment";
import { CommentReplies } from "../models/CommentReplies";
import { FollowRequest } from "../models/FollowRequest";
import { Follower } from "../models/Follower";
import { Following } from "../models/Following";
import { Message } from "../models/Message";
import { PollAnswer } from "../models/PollAnswer";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { Reaction } from "../models/Reaction";
import { Settings } from "../models/Settings";
import { Story } from "../models/Story";
import { Token } from "../models/Token";
import { AccountType } from "../enums/AccountType";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true,
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  googleUserId?: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false,
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => AccountType, {
    nullable: false,
  })
  accountType!: "PUBLIC" | "ANONYMOUS" | "PRIVATE";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  isVerified!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  verificationExpires!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  loginAttempts!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  blockExpires!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  lastLogin!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  profile?: Profile | null;

  tokens?: Token[];

  posts?: Post[];

  reactions?: Reaction[];

  bookmarks?: Bookmark[];

  comments?: Comment[];

  followers?: Follower[];

  followings?: Following[];

  sentFollowRequests?: FollowRequest[];

  receivedFollowRequests?: FollowRequest[];

  sentMessages?: Message[];

  receivedMessages?: Message[];

  stories?: Story[];

  activities?: Activity[];

  blockedBy?: Blocked[];

  blocked?: Blocked[];

  settings?: Settings | null;

  pollAnswers?: PollAnswer[];

  commentReplies?: CommentReplies[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null;
}
