import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum AccountType {
  Anonymous = 'ANONYMOUS',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type AddClipPostInput = {
  audioId?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<PlaceInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: PostType;
};

export type AddMediaPostInput = {
  caption?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<PlaceInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: PostType;
};

export type AddPollPostInput = {
  pollOptions?: InputMaybe<Array<PollOptionInput>>;
  pollQuestion?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: PostType;
};

export type AddTextualPostInput = {
  published?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
  type: PostType;
};

export type Audio = {
  __typename?: 'Audio';
  id: Scalars['String'];
  postId: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Bookmark = {
  __typename?: 'Bookmark';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  postId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type BookmarkOutput = {
  __typename?: 'BookmarkOutput';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  post: PostOutput;
  postId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type BookmarkPostOutput = {
  __typename?: 'BookmarkPostOutput';
  bookmarked: Scalars['Boolean'];
  postId: Scalars['String'];
};

export type BookmarksOutput = {
  __typename?: 'BookmarksOutput';
  data: Array<BookmarkOutput>;
  pagination: PaginationOutput;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type ClipAudio = {
  __typename?: 'ClipAudio';
  _count?: Maybe<ClipAudioCount>;
  audioUrl: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ClipAudioCount = {
  __typename?: 'ClipAudioCount';
  clips: Scalars['Int'];
};

export type ClipOutput = {
  __typename?: 'ClipOutput';
  clipAudio: ClipAudio;
  id: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  url: Scalars['String'];
};

export type ForgotPasswordInput = {
  emailOrUsername: Scalars['String'];
};

export type ForgotPasswordOutput = {
  __typename?: 'ForgotPasswordOutput';
  email: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  verificationTokenId?: Maybe<Scalars['String']>;
  verificationUuid?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GetMessagesOuput = {
  __typename?: 'GetMessagesOuput';
  data: Array<MessageOutput>;
  pagination: PaginationOutput;
};

export type GetPostsOutput = {
  __typename?: 'GetPostsOutput';
  data: Array<PostOutput>;
  pagination: PaginationOutput;
};

export type GoogleAuthInput = {
  googleAccessToken: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type GoogleAuthOutput = {
  __typename?: 'GoogleAuthOutput';
  accessToken?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  refreshToken?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export enum InterestedInTypes {
  Female = 'FEMALE',
  Men = 'MEN'
}

export type LoginInput = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  profile: Profile;
  refreshToken: Scalars['String'];
  username: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  _count?: Maybe<MessageCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  mediaThumbnailUrl?: Maybe<Scalars['String']>;
  mediaType: MessageMediaType;
  mediaUrl?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  replyToId?: Maybe<Scalars['String']>;
  sourceUserId: Scalars['String'];
  storyId?: Maybe<Scalars['String']>;
  targetUserId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MessageCount = {
  __typename?: 'MessageCount';
  replyToMessage: Scalars['Int'];
};

export enum MessageMediaType {
  Audio = 'AUDIO',
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Post = 'POST',
  Story = 'STORY',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type MessageOutput = {
  __typename?: 'MessageOutput';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  mediaThumbnailUrl?: Maybe<Scalars['String']>;
  mediaType: MessageMediaType;
  mediaUrl?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  replyTo: Message;
  sourceUser: User;
  story?: Maybe<Story>;
  targetUser: User;
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addClipPost: Post;
  addMediaPost: Post;
  addMessage: MessageOutput;
  addPollPost: Post;
  addTextualPost: Post;
  bookmarkPost: BookmarkPostOutput;
  changePassword: Scalars['Boolean'];
  changeProfilePicture: Scalars['Boolean'];
  deactivateUser: Scalars['Boolean'];
  deleteMessage: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  forgotPassword: ForgotPasswordOutput;
  googleAuth: GoogleAuthOutput;
  incrementPostView: Scalars['Boolean'];
  login: LoginOutput;
  logout: Scalars['Boolean'];
  multipleUploadFile: Scalars['Boolean'];
  postReaction: ReactionOutput;
  removeProfilePicture: Scalars['Boolean'];
  resetPassword: ForgotPasswordOutput;
  signUp: SignUpOutput;
  singleUpload: Scalars['Boolean'];
  updateMediaPost: Scalars['Boolean'];
  updateProfile: ProfileOutput;
  updateTextualPost: Scalars['Boolean'];
  updateUser: UpdateUserOutput;
  verifyForgotPassword?: Maybe<ForgotPasswordOutput>;
  verifyUserEmail?: Maybe<Scalars['Boolean']>;
};


export type MutationAddClipPostArgs = {
  addClipPostInput: AddClipPostInput;
  clipAudioMedia: Scalars['Upload'];
  clipMedia: Scalars['Upload'];
};


export type MutationAddMediaPostArgs = {
  addMediaPostInput: AddMediaPostInput;
  media: Array<Scalars['Upload']>;
  mediaThumbnail?: InputMaybe<Scalars['Upload']>;
};


export type MutationAddMessageArgs = {
  media?: InputMaybe<Scalars['Upload']>;
  newMessageInput: NewMessageInput;
};


export type MutationAddPollPostArgs = {
  addPollPostInput: AddPollPostInput;
};


export type MutationAddTextualPostArgs = {
  addTextualPostInput: AddTextualPostInput;
};


export type MutationBookmarkPostArgs = {
  postId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangeProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationDeleteMessageArgs = {
  messageId: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationGoogleAuthArgs = {
  googleAuthInput: GoogleAuthInput;
};


export type MutationIncrementPostViewArgs = {
  postId: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationMultipleUploadFileArgs = {
  picture: Array<Scalars['Upload']>;
};


export type MutationPostReactionArgs = {
  postReactionInput: PostReactionInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationSingleUploadArgs = {
  picture: Scalars['Upload'];
};


export type MutationUpdateMediaPostArgs = {
  postId: Scalars['String'];
  updatePostInput: UpdateMediaPostInput;
};


export type MutationUpdateProfileArgs = {
  profileInput: ProfileInput;
};


export type MutationUpdateTextualPostArgs = {
  postId: Scalars['String'];
  updatePostInput: UpdateTextualPostInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationVerifyForgotPasswordArgs = {
  verificationToken: Scalars['String'];
};


export type MutationVerifyUserEmailArgs = {
  verificationToken: Scalars['String'];
};

export type NewMessageInput = {
  mediaType: MessageMediaType;
  message?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['String']>;
  replyToId?: InputMaybe<Scalars['String']>;
  storyId?: InputMaybe<Scalars['String']>;
  targetUserId: Scalars['String'];
};

export type PaginationInput = {
  cursor?: InputMaybe<Scalars['String']>;
  firstQueryResult: Scalars['Boolean'];
  take: Scalars['Float'];
};

export type PaginationOutput = {
  __typename?: 'PaginationOutput';
  cursor?: Maybe<Scalars['String']>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['String'];
  postId: Scalars['String'];
  url: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  _count?: Maybe<PlaceCount>;
  address: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type PlaceCount = {
  __typename?: 'PlaceCount';
  posts: Scalars['Int'];
};

export type PlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PollOption = {
  __typename?: 'PollOption';
  _count?: Maybe<PollOptionCount>;
  id: Scalars['String'];
  option: Scalars['String'];
  pollId: Scalars['String'];
};

export type PollOptionCount = {
  __typename?: 'PollOptionCount';
  pollAnswers: Scalars['Int'];
};

export type PollOptionInput = {
  option: Scalars['String'];
};

export type PollOutput = {
  __typename?: 'PollOutput';
  id: Scalars['String'];
  pollOptions: Array<PollOption>;
  postId: Scalars['String'];
  question: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  archive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  metaTags?: Maybe<Scalars['JSON']>;
  placeId?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  type: PostType;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  views: Scalars['Int'];
};

export type PostCount = {
  __typename?: 'PostCount';
  activities: Scalars['Int'];
  bookmarks: Scalars['Int'];
  comments: Scalars['Int'];
  message: Scalars['Int'];
  photos: Scalars['Int'];
  reactions: Scalars['Int'];
  tags: Scalars['Int'];
};

export type PostOutput = {
  __typename?: 'PostOutput';
  _count?: Maybe<PostCount>;
  audio?: Maybe<Audio>;
  bookmarks?: Maybe<Array<Bookmark>>;
  caption?: Maybe<Scalars['String']>;
  clip?: Maybe<ClipOutput>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  photos?: Maybe<Array<Photo>>;
  place?: Maybe<Place>;
  poll?: Maybe<PollOutput>;
  reactions?: Maybe<Array<Reaction>>;
  tags?: Maybe<Array<Tag>>;
  textual?: Maybe<Textual>;
  type: PostType;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  video?: Maybe<Video>;
  views: Scalars['Int'];
};

export type PostReactionInput = {
  postId: Scalars['String'];
  reactionType: ReactionType;
};

export enum PostType {
  Audio = 'AUDIO',
  Clip = 'CLIP',
  Photo = 'PHOTO',
  Poll = 'POLL',
  Textual = 'TEXTUAL',
  Video = 'VIDEO'
}

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  dpUrl?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['String'];
  interestedIn?: Maybe<InterestedInTypes>;
  mobileNo?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  relationshipStatus?: Maybe<RelationshipStatus>;
  userId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Gender>;
  interestedIn?: InputMaybe<InterestedInTypes>;
  mobileNo?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  relationshipStatus?: InputMaybe<RelationshipStatus>;
  website?: InputMaybe<Scalars['String']>;
};

export type ProfileOutput = {
  __typename?: 'ProfileOutput';
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  dpUrl?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['String'];
  interestedIn?: Maybe<InterestedInTypes>;
  mobileNo?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  relationshipStatus?: Maybe<RelationshipStatus>;
  website?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getBookmarkedPosts: BookmarksOutput;
  getExplorePosts: GetPostsOutput;
  getMediaAccessToken: Scalars['String'];
  getMessages: GetMessagesOuput;
  getPost: PostOutput;
  getRelatedPosts: GetPostsOutput;
  getSimilarPosts: Array<PostOutput>;
  getUser?: Maybe<UserOutput>;
  getUserPosts: GetPostsOutput;
  isUsernameAvailable?: Maybe<Scalars['Boolean']>;
  test: Scalars['String'];
  trainSimilarPostRecommender: Scalars['Boolean'];
  verifyAccessToken?: Maybe<Scalars['Boolean']>;
};


export type QueryGetBookmarkedPostsArgs = {
  paginationInput: PaginationInput;
};


export type QueryGetExplorePostsArgs = {
  paginationInput: PaginationInput;
};


export type QueryGetMessagesArgs = {
  paginationInput: PaginationInput;
  targetUserId: Scalars['String'];
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
};


export type QueryGetRelatedPostsArgs = {
  paginationInput: PaginationInput;
  postId: Scalars['String'];
};


export type QueryGetSimilarPostsArgs = {
  postId: Scalars['String'];
};


export type QueryGetUserPostsArgs = {
  paginationInput: PaginationInput;
};


export type QueryIsUsernameAvailableArgs = {
  username: Scalars['String'];
};


export type QueryVerifyAccessTokenArgs = {
  accessToken: Scalars['String'];
};

export type Reaction = {
  __typename?: 'Reaction';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  postId: Scalars['String'];
  reaction: ReactionType;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ReactionOutput = {
  __typename?: 'ReactionOutput';
  createdAt: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['String'];
  postId: Scalars['String'];
  reaction: ReactionType;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export enum ReactionType {
  Celebrate = 'CELEBRATE',
  Cool = 'COOL',
  Fire = 'FIRE',
  Laugh = 'LAUGH',
  Like = 'LIKE'
}

export enum RelationshipStatus {
  Divorced = 'DIVORCED',
  Engaged = 'ENGAGED',
  InARelationship = 'IN_A_RELATIONSHIP',
  ItsComplicated = 'ITS_COMPLICATED',
  Married = 'MARRIED',
  Seperated = 'SEPERATED',
  Single = 'SINGLE',
  Widowed = 'WIDOWED'
}

export type ResetPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  verificationTokenId: Scalars['String'];
  verificationUuid: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignUpInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpOutput = {
  __typename?: 'SignUpOutput';
  email: Scalars['String'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  username: Scalars['String'];
};

export type Story = {
  __typename?: 'Story';
  _count?: Maybe<StoryCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  mediaUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type StoryCount = {
  __typename?: 'StoryCount';
  message: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: MessageOutput;
  newMessageNotification: MessageOutput;
};

export type Tag = {
  __typename?: 'Tag';
  _count?: Maybe<TagCount>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TagCount = {
  __typename?: 'TagCount';
  posts: Scalars['Int'];
};

export type Textual = {
  __typename?: 'Textual';
  id: Scalars['String'];
  postId: Scalars['String'];
  text: Scalars['String'];
};

export type UpdateMediaPostInput = {
  caption?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateTextualPostInput = {
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  profile: ProfileInput;
  username: Scalars['String'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  profile: Profile;
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accountType: AccountType;
  active: Scalars['Boolean'];
  blockExpires: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  googleUserId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  loginAttempts: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  verificationExpires: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  activities: Scalars['Int'];
  blocked: Scalars['Int'];
  blockedBy: Scalars['Int'];
  bookmarks: Scalars['Int'];
  commentReplies: Scalars['Int'];
  comments: Scalars['Int'];
  followers: Scalars['Int'];
  followings: Scalars['Int'];
  pollAnswers: Scalars['Int'];
  posts: Scalars['Int'];
  reactions: Scalars['Int'];
  receivedFollowRequests: Scalars['Int'];
  receivedMessages: Scalars['Int'];
  sentFollowRequests: Scalars['Int'];
  sentMessages: Scalars['Int'];
  stories: Scalars['Int'];
  tokens: Scalars['Int'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  accountType: AccountType;
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  profile: Profile;
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  postId: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  url: Scalars['String'];
};

export type VerifyAccessTokenQueryVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type VerifyAccessTokenQuery = { __typename?: 'Query', verifyAccessToken?: boolean | null };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpOutput', id: string, email: string, username: string, isVerified: boolean } };

export type GoogleAuthMutationVariables = Exact<{
  googleAuthInput: GoogleAuthInput;
}>;


export type GoogleAuthMutation = { __typename?: 'Mutation', googleAuth: { __typename?: 'GoogleAuthOutput', id: string, email: string, username: string, accessToken?: string | null, refreshToken?: string | null, isVerified: boolean } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', id: string, email: string, username: string, accessToken: string, refreshToken: string, profile: { __typename?: 'Profile', id: string, nickname: string, bio?: string | null, mobileNo?: string | null, country?: string | null, gender?: Gender | null, dob?: any | null, interestedIn?: InterestedInTypes | null, relationshipStatus?: RelationshipStatus | null, website?: string | null, dpUrl?: string | null } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type VerifyUserEmailMutationVariables = Exact<{
  verificationToken: Scalars['String'];
}>;


export type VerifyUserEmailMutation = { __typename?: 'Mutation', verifyUserEmail?: boolean | null };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordOutput', email: string, message: string, verificationUuid?: string | null, isVerified?: boolean | null } };

export type VerifyResetPasswordTokenMutationVariables = Exact<{
  verificatonToken: Scalars['String'];
}>;


export type VerifyResetPasswordTokenMutation = { __typename?: 'Mutation', verifyForgotPassword?: { __typename?: 'ForgotPasswordOutput', email: string, message: string, verificationUuid?: string | null, isVerified?: boolean | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'ForgotPasswordOutput', email: string, message: string, verificationUuid?: string | null, isVerified?: boolean | null } };

export type DeactiveUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeactiveUserMutation = { __typename?: 'Mutation', deactivateUser: boolean };

export type UpdateProfileMutationVariables = Exact<{
  profileInput: ProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'ProfileOutput', id: string, nickname: string, bio?: string | null, mobileNo?: string | null, country?: string | null, gender?: Gender | null, dob?: any | null, interestedIn?: InterestedInTypes | null, relationshipStatus?: RelationshipStatus | null, website?: string | null, dpUrl?: string | null } };

export type MessageCommonFieldsFragment = { __typename?: 'MessageOutput', id: string, message?: string | null, mediaUrl?: string | null, mediaThumbnailUrl?: string | null, mediaType: MessageMediaType, createdAt: any, post?: { __typename?: 'Post', id: string, type: PostType } | null, sourceUser: { __typename?: 'User', id: string }, targetUser: { __typename?: 'User', id: string } };

export type GetMessagesQueryVariables = Exact<{
  paginationInput: PaginationInput;
  targetUserId: Scalars['String'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages: { __typename?: 'GetMessagesOuput', data: Array<{ __typename?: 'MessageOutput', id: string, message?: string | null, mediaUrl?: string | null, mediaThumbnailUrl?: string | null, mediaType: MessageMediaType, createdAt: any, post?: { __typename?: 'Post', id: string, type: PostType } | null, sourceUser: { __typename?: 'User', id: string }, targetUser: { __typename?: 'User', id: string } }>, pagination: { __typename?: 'PaginationOutput', cursor?: string | null } } };

export type AddMessageMutationVariables = Exact<{
  newMessageInput: NewMessageInput;
  media?: InputMaybe<Scalars['Upload']>;
}>;


export type AddMessageMutation = { __typename?: 'Mutation', addMessage: { __typename?: 'MessageOutput', id: string, message?: string | null, mediaUrl?: string | null, mediaThumbnailUrl?: string | null, mediaType: MessageMediaType, createdAt: any, post?: { __typename?: 'Post', id: string, type: PostType } | null, sourceUser: { __typename?: 'User', id: string }, targetUser: { __typename?: 'User', id: string } } };

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessageSubscription = { __typename?: 'Subscription', newMessage: { __typename?: 'MessageOutput', id: string, message?: string | null, mediaUrl?: string | null, mediaThumbnailUrl?: string | null, mediaType: MessageMediaType, createdAt: any, post?: { __typename?: 'Post', id: string, type: PostType } | null, sourceUser: { __typename?: 'User', id: string }, targetUser: { __typename?: 'User', id: string } } };

export type PostCommonFieldsFragment = { __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null };

export type GetPostQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } };

export type GetSimilarPostsQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetSimilarPostsQuery = { __typename?: 'Query', getSimilarPosts: Array<{ __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null }> };

export type GetUserPostsQueryVariables = Exact<{
  paginationInput: PaginationInput;
}>;


export type GetUserPostsQuery = { __typename?: 'Query', getUserPosts: { __typename?: 'GetPostsOutput', data: Array<{ __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null }>, pagination: { __typename?: 'PaginationOutput', cursor?: string | null } } };

export type GetBookmarkedPostsQueryVariables = Exact<{
  paginationInput: PaginationInput;
}>;


export type GetBookmarkedPostsQuery = { __typename?: 'Query', getBookmarkedPosts: { __typename?: 'BookmarksOutput', data: Array<{ __typename?: 'BookmarkOutput', post: { __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } }>, pagination: { __typename?: 'PaginationOutput', cursor?: string | null } } };

export type GetExplorePostsQueryVariables = Exact<{
  paginationInput: PaginationInput;
}>;


export type GetExplorePostsQuery = { __typename?: 'Query', getExplorePosts: { __typename?: 'GetPostsOutput', data: Array<{ __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null }>, pagination: { __typename?: 'PaginationOutput', cursor?: string | null } } };

export type GetRelatedPostsQueryVariables = Exact<{
  postId: Scalars['String'];
  paginationInput: PaginationInput;
}>;


export type GetRelatedPostsQuery = { __typename?: 'Query', getRelatedPosts: { __typename?: 'GetPostsOutput', data: Array<{ __typename?: 'PostOutput', id: string, caption?: string | null, type: PostType, createdAt: any, updatedAt: any, views: number, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: string }> | null, reactions?: Array<{ __typename?: 'Reaction', reaction: ReactionType }> | null, place?: { __typename?: 'Place', id: string, name: string } | null, poll?: { __typename?: 'PollOutput', id: string, question: string, pollOptions: Array<{ __typename?: 'PollOption', id: string, option: string }> } | null, photos?: Array<{ __typename?: 'Photo', id: string, url: string }> | null, video?: { __typename?: 'Video', id: string, url: string, thumbnailUrl: string } | null, clip?: { __typename?: 'ClipOutput', id: string, url: string, thumbnailUrl: string, clipAudio: { __typename?: 'ClipAudio', id: string, name: string, audioUrl: string } } | null, textual?: { __typename?: 'Textual', id: string, text: string } | null, audio?: { __typename?: 'Audio', id: string, url: string, thumbnailUrl?: string | null } | null, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null }>, pagination: { __typename?: 'PaginationOutput', cursor?: string | null } } };

export type BookmarkPostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type BookmarkPostMutation = { __typename?: 'Mutation', bookmarkPost: { __typename?: 'BookmarkPostOutput', bookmarked: boolean, postId: string } };

export type IncrementPostViewMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type IncrementPostViewMutation = { __typename?: 'Mutation', incrementPostView: boolean };

export type PostReactionMutationVariables = Exact<{
  postReactionInput: PostReactionInput;
}>;


export type PostReactionMutation = { __typename?: 'Mutation', postReaction: { __typename?: 'ReactionOutput', id: string, reaction: ReactionType, deleted: boolean } };

export type AddVideoPostMutationVariables = Exact<{
  addMediaPostInput: AddMediaPostInput;
  media: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type AddVideoPostMutation = { __typename?: 'Mutation', addMediaPost: { __typename?: 'Post', id: string, type: PostType, createdAt: any, updatedAt: any, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } };

export type AddAudioPostMutationVariables = Exact<{
  addMediaPostInput: AddMediaPostInput;
  media: Array<Scalars['Upload']> | Scalars['Upload'];
  mediaThumbnail?: InputMaybe<Scalars['Upload']>;
}>;


export type AddAudioPostMutation = { __typename?: 'Mutation', addMediaPost: { __typename?: 'Post', id: string, type: PostType, createdAt: any, updatedAt: any, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } };

export type AddPhotoPostMutationVariables = Exact<{
  addMediaPostInput: AddMediaPostInput;
  media: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type AddPhotoPostMutation = { __typename?: 'Mutation', addMediaPost: { __typename?: 'Post', id: string, type: PostType, createdAt: any, updatedAt: any, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } };

export type AddTextualPostMutationVariables = Exact<{
  addTextualPost: AddTextualPostInput;
}>;


export type AddTextualPostMutation = { __typename?: 'Mutation', addTextualPost: { __typename?: 'Post', id: string, type: PostType, createdAt: any, updatedAt: any, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } };

export type AddPollPostMutationVariables = Exact<{
  addPollPostInput: AddPollPostInput;
}>;


export type AddPollPostMutation = { __typename?: 'Mutation', addPollPost: { __typename?: 'Post', id: string, type: PostType, createdAt: any, updatedAt: any, _count?: { __typename?: 'PostCount', reactions: number, comments: number } | null } };

export type UpdateMediaPostMutationVariables = Exact<{
  postId: Scalars['String'];
  updateMediaPostInput: UpdateMediaPostInput;
}>;


export type UpdateMediaPostMutation = { __typename?: 'Mutation', updateMediaPost: boolean };

export type UpdateTextualPostMutationVariables = Exact<{
  postId: Scalars['String'];
  updateTextualPostInput: UpdateTextualPostInput;
}>;


export type UpdateTextualPostMutation = { __typename?: 'Mutation', updateTextualPost: boolean };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type GenerateMediaAccessTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateMediaAccessTokenQuery = { __typename?: 'Query', getMediaAccessToken: string };

export type TrainSimilarPostRecommenderQueryVariables = Exact<{ [key: string]: never; }>;


export type TrainSimilarPostRecommenderQuery = { __typename?: 'Query', trainSimilarPostRecommender: boolean };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'UserOutput', id: string, email: string, username: string, role: Role, accountType: AccountType, isVerified: boolean, active: boolean, lastLogin: any, createdAt: any, updatedAt: any, profile: { __typename?: 'Profile', id: string, nickname: string, bio?: string | null, mobileNo?: string | null, country?: string | null, gender?: Gender | null, dob?: any | null, interestedIn?: InterestedInTypes | null, relationshipStatus?: RelationshipStatus | null, website?: string | null, dpUrl?: string | null } } | null };

export type IsUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable?: boolean | null };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UpdateUserOutput', username: string, profile: { __typename?: 'Profile', id: string, nickname: string, bio?: string | null, mobileNo?: string | null, country?: string | null, gender?: Gender | null, dob?: any | null, interestedIn?: InterestedInTypes | null, relationshipStatus?: RelationshipStatus | null, website?: string | null, dpUrl?: string | null } } };

export type ChangePasswordMutationVariables = Exact<{
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type ChangeProfilePictureMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type ChangeProfilePictureMutation = { __typename?: 'Mutation', changeProfilePicture: boolean };

export type RemoveProfilePictureMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveProfilePictureMutation = { __typename?: 'Mutation', removeProfilePicture: boolean };

export const MessageCommonFieldsFragmentDoc = gql`
    fragment MessageCommonFields on MessageOutput {
  id
  message
  mediaUrl
  mediaThumbnailUrl
  mediaType
  createdAt
  post {
    id
    type
  }
  sourceUser {
    id
  }
  targetUser {
    id
  }
}
    `;
export const PostCommonFieldsFragmentDoc = gql`
    fragment PostCommonFields on PostOutput {
  id
  caption
  type
  createdAt
  updatedAt
  tags {
    id
    name
  }
  bookmarks {
    id
  }
  reactions {
    reaction
  }
  place {
    id
    name
  }
  poll {
    id
    question
    pollOptions {
      id
      option
    }
  }
  photos {
    id
    url
  }
  video {
    id
    url
    thumbnailUrl
  }
  clip {
    id
    url
    thumbnailUrl
    clipAudio {
      id
      name
      audioUrl
    }
  }
  textual {
    id
    text
  }
  audio {
    id
    url
    thumbnailUrl
  }
  views
  _count {
    reactions
    comments
  }
}
    `;
export const VerifyAccessTokenDocument = gql`
    query VerifyAccessToken($accessToken: String!) {
  verifyAccessToken(accessToken: $accessToken)
}
    `;

/**
 * __useVerifyAccessTokenQuery__
 *
 * To run a query within a React component, call `useVerifyAccessTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyAccessTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyAccessTokenQuery({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useVerifyAccessTokenQuery(baseOptions: Apollo.QueryHookOptions<VerifyAccessTokenQuery, VerifyAccessTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyAccessTokenQuery, VerifyAccessTokenQueryVariables>(VerifyAccessTokenDocument, options);
      }
export function useVerifyAccessTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyAccessTokenQuery, VerifyAccessTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyAccessTokenQuery, VerifyAccessTokenQueryVariables>(VerifyAccessTokenDocument, options);
        }
export type VerifyAccessTokenQueryHookResult = ReturnType<typeof useVerifyAccessTokenQuery>;
export type VerifyAccessTokenLazyQueryHookResult = ReturnType<typeof useVerifyAccessTokenLazyQuery>;
export type VerifyAccessTokenQueryResult = Apollo.QueryResult<VerifyAccessTokenQuery, VerifyAccessTokenQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    id
    email
    username
    isVerified
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const GoogleAuthDocument = gql`
    mutation GoogleAuth($googleAuthInput: GoogleAuthInput!) {
  googleAuth(googleAuthInput: $googleAuthInput) {
    id
    email
    username
    accessToken
    refreshToken
    isVerified
  }
}
    `;
export type GoogleAuthMutationFn = Apollo.MutationFunction<GoogleAuthMutation, GoogleAuthMutationVariables>;

/**
 * __useGoogleAuthMutation__
 *
 * To run a mutation, you first call `useGoogleAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleAuthMutation, { data, loading, error }] = useGoogleAuthMutation({
 *   variables: {
 *      googleAuthInput: // value for 'googleAuthInput'
 *   },
 * });
 */
export function useGoogleAuthMutation(baseOptions?: Apollo.MutationHookOptions<GoogleAuthMutation, GoogleAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleAuthMutation, GoogleAuthMutationVariables>(GoogleAuthDocument, options);
      }
export type GoogleAuthMutationHookResult = ReturnType<typeof useGoogleAuthMutation>;
export type GoogleAuthMutationResult = Apollo.MutationResult<GoogleAuthMutation>;
export type GoogleAuthMutationOptions = Apollo.BaseMutationOptions<GoogleAuthMutation, GoogleAuthMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    id
    email
    username
    profile {
      id
      nickname
      bio
      mobileNo
      country
      gender
      dob
      interestedIn
      relationshipStatus
      website
      dpUrl
    }
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const VerifyUserEmailDocument = gql`
    mutation VerifyUserEmail($verificationToken: String!) {
  verifyUserEmail(verificationToken: $verificationToken)
}
    `;
export type VerifyUserEmailMutationFn = Apollo.MutationFunction<VerifyUserEmailMutation, VerifyUserEmailMutationVariables>;

/**
 * __useVerifyUserEmailMutation__
 *
 * To run a mutation, you first call `useVerifyUserEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserEmailMutation, { data, loading, error }] = useVerifyUserEmailMutation({
 *   variables: {
 *      verificationToken: // value for 'verificationToken'
 *   },
 * });
 */
export function useVerifyUserEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserEmailMutation, VerifyUserEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserEmailMutation, VerifyUserEmailMutationVariables>(VerifyUserEmailDocument, options);
      }
export type VerifyUserEmailMutationHookResult = ReturnType<typeof useVerifyUserEmailMutation>;
export type VerifyUserEmailMutationResult = Apollo.MutationResult<VerifyUserEmailMutation>;
export type VerifyUserEmailMutationOptions = Apollo.BaseMutationOptions<VerifyUserEmailMutation, VerifyUserEmailMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
  forgotPassword(forgotPasswordInput: $forgotPasswordInput) {
    email
    message
    verificationUuid
    isVerified
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const VerifyResetPasswordTokenDocument = gql`
    mutation VerifyResetPasswordToken($verificatonToken: String!) {
  verifyForgotPassword(verificationToken: $verificatonToken) {
    email
    message
    verificationUuid
    isVerified
  }
}
    `;
export type VerifyResetPasswordTokenMutationFn = Apollo.MutationFunction<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>;

/**
 * __useVerifyResetPasswordTokenMutation__
 *
 * To run a mutation, you first call `useVerifyResetPasswordTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyResetPasswordTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyResetPasswordTokenMutation, { data, loading, error }] = useVerifyResetPasswordTokenMutation({
 *   variables: {
 *      verificatonToken: // value for 'verificatonToken'
 *   },
 * });
 */
export function useVerifyResetPasswordTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>(VerifyResetPasswordTokenDocument, options);
      }
export type VerifyResetPasswordTokenMutationHookResult = ReturnType<typeof useVerifyResetPasswordTokenMutation>;
export type VerifyResetPasswordTokenMutationResult = Apollo.MutationResult<VerifyResetPasswordTokenMutation>;
export type VerifyResetPasswordTokenMutationOptions = Apollo.BaseMutationOptions<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(resetPasswordInput: $resetPasswordInput) {
    email
    message
    verificationUuid
    isVerified
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const DeactiveUserDocument = gql`
    mutation DeactiveUser {
  deactivateUser
}
    `;
export type DeactiveUserMutationFn = Apollo.MutationFunction<DeactiveUserMutation, DeactiveUserMutationVariables>;

/**
 * __useDeactiveUserMutation__
 *
 * To run a mutation, you first call `useDeactiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactiveUserMutation, { data, loading, error }] = useDeactiveUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeactiveUserMutation(baseOptions?: Apollo.MutationHookOptions<DeactiveUserMutation, DeactiveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeactiveUserMutation, DeactiveUserMutationVariables>(DeactiveUserDocument, options);
      }
export type DeactiveUserMutationHookResult = ReturnType<typeof useDeactiveUserMutation>;
export type DeactiveUserMutationResult = Apollo.MutationResult<DeactiveUserMutation>;
export type DeactiveUserMutationOptions = Apollo.BaseMutationOptions<DeactiveUserMutation, DeactiveUserMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($profileInput: ProfileInput!) {
  updateProfile(profileInput: $profileInput) {
    id
    nickname
    bio
    mobileNo
    country
    gender
    dob
    interestedIn
    relationshipStatus
    website
    dpUrl
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      profileInput: // value for 'profileInput'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($paginationInput: PaginationInput!, $targetUserId: String!) {
  getMessages(paginationInput: $paginationInput, targetUserId: $targetUserId) {
    data {
      ...MessageCommonFields
    }
    pagination {
      cursor
    }
  }
}
    ${MessageCommonFieldsFragmentDoc}`;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      paginationInput: // value for 'paginationInput'
 *      targetUserId: // value for 'targetUserId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const AddMessageDocument = gql`
    mutation AddMessage($newMessageInput: NewMessageInput!, $media: Upload) {
  addMessage(newMessageInput: $newMessageInput, media: $media) {
    ...MessageCommonFields
  }
}
    ${MessageCommonFieldsFragmentDoc}`;
export type AddMessageMutationFn = Apollo.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      newMessageInput: // value for 'newMessageInput'
 *      media: // value for 'media'
 *   },
 * });
 */
export function useAddMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMessageMutation, AddMessageMutationVariables>(AddMessageDocument, options);
      }
export type AddMessageMutationHookResult = ReturnType<typeof useAddMessageMutation>;
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
export const NewMessageDocument = gql`
    subscription NewMessage {
  newMessage {
    id
    message
    mediaUrl
    mediaThumbnailUrl
    mediaType
    createdAt
    post {
      id
      type
    }
    sourceUser {
      id
    }
    targetUser {
      id
    }
  }
}
    `;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, options);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
export const GetPostDocument = gql`
    query GetPost($postId: String!) {
  getPost(postId: $postId) {
    ...PostCommonFields
  }
}
    ${PostCommonFieldsFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetSimilarPostsDocument = gql`
    query GetSimilarPosts($postId: String!) {
  getSimilarPosts(postId: $postId) {
    ...PostCommonFields
  }
}
    ${PostCommonFieldsFragmentDoc}`;

/**
 * __useGetSimilarPostsQuery__
 *
 * To run a query within a React component, call `useGetSimilarPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarPostsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetSimilarPostsQuery(baseOptions: Apollo.QueryHookOptions<GetSimilarPostsQuery, GetSimilarPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimilarPostsQuery, GetSimilarPostsQueryVariables>(GetSimilarPostsDocument, options);
      }
export function useGetSimilarPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimilarPostsQuery, GetSimilarPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimilarPostsQuery, GetSimilarPostsQueryVariables>(GetSimilarPostsDocument, options);
        }
export type GetSimilarPostsQueryHookResult = ReturnType<typeof useGetSimilarPostsQuery>;
export type GetSimilarPostsLazyQueryHookResult = ReturnType<typeof useGetSimilarPostsLazyQuery>;
export type GetSimilarPostsQueryResult = Apollo.QueryResult<GetSimilarPostsQuery, GetSimilarPostsQueryVariables>;
export const GetUserPostsDocument = gql`
    query GetUserPosts($paginationInput: PaginationInput!) {
  getUserPosts(paginationInput: $paginationInput) {
    data {
      ...PostCommonFields
    }
    pagination {
      cursor
    }
  }
}
    ${PostCommonFieldsFragmentDoc}`;

/**
 * __useGetUserPostsQuery__
 *
 * To run a query within a React component, call `useGetUserPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPostsQuery({
 *   variables: {
 *      paginationInput: // value for 'paginationInput'
 *   },
 * });
 */
export function useGetUserPostsQuery(baseOptions: Apollo.QueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(GetUserPostsDocument, options);
      }
export function useGetUserPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(GetUserPostsDocument, options);
        }
export type GetUserPostsQueryHookResult = ReturnType<typeof useGetUserPostsQuery>;
export type GetUserPostsLazyQueryHookResult = ReturnType<typeof useGetUserPostsLazyQuery>;
export type GetUserPostsQueryResult = Apollo.QueryResult<GetUserPostsQuery, GetUserPostsQueryVariables>;
export const GetBookmarkedPostsDocument = gql`
    query GetBookmarkedPosts($paginationInput: PaginationInput!) {
  getBookmarkedPosts(paginationInput: $paginationInput) {
    data {
      post {
        ...PostCommonFields
      }
    }
    pagination {
      cursor
    }
  }
}
    ${PostCommonFieldsFragmentDoc}`;

/**
 * __useGetBookmarkedPostsQuery__
 *
 * To run a query within a React component, call `useGetBookmarkedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarkedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarkedPostsQuery({
 *   variables: {
 *      paginationInput: // value for 'paginationInput'
 *   },
 * });
 */
export function useGetBookmarkedPostsQuery(baseOptions: Apollo.QueryHookOptions<GetBookmarkedPostsQuery, GetBookmarkedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookmarkedPostsQuery, GetBookmarkedPostsQueryVariables>(GetBookmarkedPostsDocument, options);
      }
export function useGetBookmarkedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarkedPostsQuery, GetBookmarkedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookmarkedPostsQuery, GetBookmarkedPostsQueryVariables>(GetBookmarkedPostsDocument, options);
        }
export type GetBookmarkedPostsQueryHookResult = ReturnType<typeof useGetBookmarkedPostsQuery>;
export type GetBookmarkedPostsLazyQueryHookResult = ReturnType<typeof useGetBookmarkedPostsLazyQuery>;
export type GetBookmarkedPostsQueryResult = Apollo.QueryResult<GetBookmarkedPostsQuery, GetBookmarkedPostsQueryVariables>;
export const GetExplorePostsDocument = gql`
    query GetExplorePosts($paginationInput: PaginationInput!) {
  getExplorePosts(paginationInput: $paginationInput) {
    data {
      ...PostCommonFields
    }
    pagination {
      cursor
    }
  }
}
    ${PostCommonFieldsFragmentDoc}`;

/**
 * __useGetExplorePostsQuery__
 *
 * To run a query within a React component, call `useGetExplorePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExplorePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExplorePostsQuery({
 *   variables: {
 *      paginationInput: // value for 'paginationInput'
 *   },
 * });
 */
export function useGetExplorePostsQuery(baseOptions: Apollo.QueryHookOptions<GetExplorePostsQuery, GetExplorePostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExplorePostsQuery, GetExplorePostsQueryVariables>(GetExplorePostsDocument, options);
      }
export function useGetExplorePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExplorePostsQuery, GetExplorePostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExplorePostsQuery, GetExplorePostsQueryVariables>(GetExplorePostsDocument, options);
        }
export type GetExplorePostsQueryHookResult = ReturnType<typeof useGetExplorePostsQuery>;
export type GetExplorePostsLazyQueryHookResult = ReturnType<typeof useGetExplorePostsLazyQuery>;
export type GetExplorePostsQueryResult = Apollo.QueryResult<GetExplorePostsQuery, GetExplorePostsQueryVariables>;
export const GetRelatedPostsDocument = gql`
    query GetRelatedPosts($postId: String!, $paginationInput: PaginationInput!) {
  getRelatedPosts(postId: $postId, paginationInput: $paginationInput) {
    data {
      ...PostCommonFields
    }
    pagination {
      cursor
    }
  }
}
    ${PostCommonFieldsFragmentDoc}`;

/**
 * __useGetRelatedPostsQuery__
 *
 * To run a query within a React component, call `useGetRelatedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelatedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelatedPostsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      paginationInput: // value for 'paginationInput'
 *   },
 * });
 */
export function useGetRelatedPostsQuery(baseOptions: Apollo.QueryHookOptions<GetRelatedPostsQuery, GetRelatedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelatedPostsQuery, GetRelatedPostsQueryVariables>(GetRelatedPostsDocument, options);
      }
export function useGetRelatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelatedPostsQuery, GetRelatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelatedPostsQuery, GetRelatedPostsQueryVariables>(GetRelatedPostsDocument, options);
        }
export type GetRelatedPostsQueryHookResult = ReturnType<typeof useGetRelatedPostsQuery>;
export type GetRelatedPostsLazyQueryHookResult = ReturnType<typeof useGetRelatedPostsLazyQuery>;
export type GetRelatedPostsQueryResult = Apollo.QueryResult<GetRelatedPostsQuery, GetRelatedPostsQueryVariables>;
export const BookmarkPostDocument = gql`
    mutation BookmarkPost($postId: String!) {
  bookmarkPost(postId: $postId) {
    bookmarked
    postId
  }
}
    `;
export type BookmarkPostMutationFn = Apollo.MutationFunction<BookmarkPostMutation, BookmarkPostMutationVariables>;

/**
 * __useBookmarkPostMutation__
 *
 * To run a mutation, you first call `useBookmarkPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookmarkPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookmarkPostMutation, { data, loading, error }] = useBookmarkPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useBookmarkPostMutation(baseOptions?: Apollo.MutationHookOptions<BookmarkPostMutation, BookmarkPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BookmarkPostMutation, BookmarkPostMutationVariables>(BookmarkPostDocument, options);
      }
export type BookmarkPostMutationHookResult = ReturnType<typeof useBookmarkPostMutation>;
export type BookmarkPostMutationResult = Apollo.MutationResult<BookmarkPostMutation>;
export type BookmarkPostMutationOptions = Apollo.BaseMutationOptions<BookmarkPostMutation, BookmarkPostMutationVariables>;
export const IncrementPostViewDocument = gql`
    mutation IncrementPostView($postId: String!) {
  incrementPostView(postId: $postId)
}
    `;
export type IncrementPostViewMutationFn = Apollo.MutationFunction<IncrementPostViewMutation, IncrementPostViewMutationVariables>;

/**
 * __useIncrementPostViewMutation__
 *
 * To run a mutation, you first call `useIncrementPostViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementPostViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementPostViewMutation, { data, loading, error }] = useIncrementPostViewMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useIncrementPostViewMutation(baseOptions?: Apollo.MutationHookOptions<IncrementPostViewMutation, IncrementPostViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncrementPostViewMutation, IncrementPostViewMutationVariables>(IncrementPostViewDocument, options);
      }
export type IncrementPostViewMutationHookResult = ReturnType<typeof useIncrementPostViewMutation>;
export type IncrementPostViewMutationResult = Apollo.MutationResult<IncrementPostViewMutation>;
export type IncrementPostViewMutationOptions = Apollo.BaseMutationOptions<IncrementPostViewMutation, IncrementPostViewMutationVariables>;
export const PostReactionDocument = gql`
    mutation PostReaction($postReactionInput: PostReactionInput!) {
  postReaction(postReactionInput: $postReactionInput) {
    id
    reaction
    deleted
  }
}
    `;
export type PostReactionMutationFn = Apollo.MutationFunction<PostReactionMutation, PostReactionMutationVariables>;

/**
 * __usePostReactionMutation__
 *
 * To run a mutation, you first call `usePostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postReactionMutation, { data, loading, error }] = usePostReactionMutation({
 *   variables: {
 *      postReactionInput: // value for 'postReactionInput'
 *   },
 * });
 */
export function usePostReactionMutation(baseOptions?: Apollo.MutationHookOptions<PostReactionMutation, PostReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostReactionMutation, PostReactionMutationVariables>(PostReactionDocument, options);
      }
export type PostReactionMutationHookResult = ReturnType<typeof usePostReactionMutation>;
export type PostReactionMutationResult = Apollo.MutationResult<PostReactionMutation>;
export type PostReactionMutationOptions = Apollo.BaseMutationOptions<PostReactionMutation, PostReactionMutationVariables>;
export const AddVideoPostDocument = gql`
    mutation AddVideoPost($addMediaPostInput: AddMediaPostInput!, $media: [Upload!]!) {
  addMediaPost(addMediaPostInput: $addMediaPostInput, media: $media) {
    id
    type
    createdAt
    updatedAt
    _count {
      reactions
      comments
    }
  }
}
    `;
export type AddVideoPostMutationFn = Apollo.MutationFunction<AddVideoPostMutation, AddVideoPostMutationVariables>;

/**
 * __useAddVideoPostMutation__
 *
 * To run a mutation, you first call `useAddVideoPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVideoPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVideoPostMutation, { data, loading, error }] = useAddVideoPostMutation({
 *   variables: {
 *      addMediaPostInput: // value for 'addMediaPostInput'
 *      media: // value for 'media'
 *   },
 * });
 */
export function useAddVideoPostMutation(baseOptions?: Apollo.MutationHookOptions<AddVideoPostMutation, AddVideoPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddVideoPostMutation, AddVideoPostMutationVariables>(AddVideoPostDocument, options);
      }
export type AddVideoPostMutationHookResult = ReturnType<typeof useAddVideoPostMutation>;
export type AddVideoPostMutationResult = Apollo.MutationResult<AddVideoPostMutation>;
export type AddVideoPostMutationOptions = Apollo.BaseMutationOptions<AddVideoPostMutation, AddVideoPostMutationVariables>;
export const AddAudioPostDocument = gql`
    mutation AddAudioPost($addMediaPostInput: AddMediaPostInput!, $media: [Upload!]!, $mediaThumbnail: Upload) {
  addMediaPost(
    addMediaPostInput: $addMediaPostInput
    media: $media
    mediaThumbnail: $mediaThumbnail
  ) {
    id
    type
    createdAt
    updatedAt
    _count {
      reactions
      comments
    }
  }
}
    `;
export type AddAudioPostMutationFn = Apollo.MutationFunction<AddAudioPostMutation, AddAudioPostMutationVariables>;

/**
 * __useAddAudioPostMutation__
 *
 * To run a mutation, you first call `useAddAudioPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAudioPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAudioPostMutation, { data, loading, error }] = useAddAudioPostMutation({
 *   variables: {
 *      addMediaPostInput: // value for 'addMediaPostInput'
 *      media: // value for 'media'
 *      mediaThumbnail: // value for 'mediaThumbnail'
 *   },
 * });
 */
export function useAddAudioPostMutation(baseOptions?: Apollo.MutationHookOptions<AddAudioPostMutation, AddAudioPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAudioPostMutation, AddAudioPostMutationVariables>(AddAudioPostDocument, options);
      }
export type AddAudioPostMutationHookResult = ReturnType<typeof useAddAudioPostMutation>;
export type AddAudioPostMutationResult = Apollo.MutationResult<AddAudioPostMutation>;
export type AddAudioPostMutationOptions = Apollo.BaseMutationOptions<AddAudioPostMutation, AddAudioPostMutationVariables>;
export const AddPhotoPostDocument = gql`
    mutation AddPhotoPost($addMediaPostInput: AddMediaPostInput!, $media: [Upload!]!) {
  addMediaPost(addMediaPostInput: $addMediaPostInput, media: $media) {
    id
    type
    createdAt
    updatedAt
    _count {
      reactions
      comments
    }
  }
}
    `;
export type AddPhotoPostMutationFn = Apollo.MutationFunction<AddPhotoPostMutation, AddPhotoPostMutationVariables>;

/**
 * __useAddPhotoPostMutation__
 *
 * To run a mutation, you first call `useAddPhotoPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPhotoPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPhotoPostMutation, { data, loading, error }] = useAddPhotoPostMutation({
 *   variables: {
 *      addMediaPostInput: // value for 'addMediaPostInput'
 *      media: // value for 'media'
 *   },
 * });
 */
export function useAddPhotoPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPhotoPostMutation, AddPhotoPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPhotoPostMutation, AddPhotoPostMutationVariables>(AddPhotoPostDocument, options);
      }
export type AddPhotoPostMutationHookResult = ReturnType<typeof useAddPhotoPostMutation>;
export type AddPhotoPostMutationResult = Apollo.MutationResult<AddPhotoPostMutation>;
export type AddPhotoPostMutationOptions = Apollo.BaseMutationOptions<AddPhotoPostMutation, AddPhotoPostMutationVariables>;
export const AddTextualPostDocument = gql`
    mutation AddTextualPost($addTextualPost: AddTextualPostInput!) {
  addTextualPost(addTextualPostInput: $addTextualPost) {
    id
    type
    createdAt
    updatedAt
    _count {
      reactions
      comments
    }
  }
}
    `;
export type AddTextualPostMutationFn = Apollo.MutationFunction<AddTextualPostMutation, AddTextualPostMutationVariables>;

/**
 * __useAddTextualPostMutation__
 *
 * To run a mutation, you first call `useAddTextualPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTextualPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTextualPostMutation, { data, loading, error }] = useAddTextualPostMutation({
 *   variables: {
 *      addTextualPost: // value for 'addTextualPost'
 *   },
 * });
 */
export function useAddTextualPostMutation(baseOptions?: Apollo.MutationHookOptions<AddTextualPostMutation, AddTextualPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTextualPostMutation, AddTextualPostMutationVariables>(AddTextualPostDocument, options);
      }
export type AddTextualPostMutationHookResult = ReturnType<typeof useAddTextualPostMutation>;
export type AddTextualPostMutationResult = Apollo.MutationResult<AddTextualPostMutation>;
export type AddTextualPostMutationOptions = Apollo.BaseMutationOptions<AddTextualPostMutation, AddTextualPostMutationVariables>;
export const AddPollPostDocument = gql`
    mutation AddPollPost($addPollPostInput: AddPollPostInput!) {
  addPollPost(addPollPostInput: $addPollPostInput) {
    id
    type
    createdAt
    updatedAt
    _count {
      reactions
      comments
    }
  }
}
    `;
export type AddPollPostMutationFn = Apollo.MutationFunction<AddPollPostMutation, AddPollPostMutationVariables>;

/**
 * __useAddPollPostMutation__
 *
 * To run a mutation, you first call `useAddPollPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPollPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPollPostMutation, { data, loading, error }] = useAddPollPostMutation({
 *   variables: {
 *      addPollPostInput: // value for 'addPollPostInput'
 *   },
 * });
 */
export function useAddPollPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPollPostMutation, AddPollPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPollPostMutation, AddPollPostMutationVariables>(AddPollPostDocument, options);
      }
export type AddPollPostMutationHookResult = ReturnType<typeof useAddPollPostMutation>;
export type AddPollPostMutationResult = Apollo.MutationResult<AddPollPostMutation>;
export type AddPollPostMutationOptions = Apollo.BaseMutationOptions<AddPollPostMutation, AddPollPostMutationVariables>;
export const UpdateMediaPostDocument = gql`
    mutation UpdateMediaPost($postId: String!, $updateMediaPostInput: UpdateMediaPostInput!) {
  updateMediaPost(postId: $postId, updatePostInput: $updateMediaPostInput)
}
    `;
export type UpdateMediaPostMutationFn = Apollo.MutationFunction<UpdateMediaPostMutation, UpdateMediaPostMutationVariables>;

/**
 * __useUpdateMediaPostMutation__
 *
 * To run a mutation, you first call `useUpdateMediaPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMediaPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMediaPostMutation, { data, loading, error }] = useUpdateMediaPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      updateMediaPostInput: // value for 'updateMediaPostInput'
 *   },
 * });
 */
export function useUpdateMediaPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMediaPostMutation, UpdateMediaPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMediaPostMutation, UpdateMediaPostMutationVariables>(UpdateMediaPostDocument, options);
      }
export type UpdateMediaPostMutationHookResult = ReturnType<typeof useUpdateMediaPostMutation>;
export type UpdateMediaPostMutationResult = Apollo.MutationResult<UpdateMediaPostMutation>;
export type UpdateMediaPostMutationOptions = Apollo.BaseMutationOptions<UpdateMediaPostMutation, UpdateMediaPostMutationVariables>;
export const UpdateTextualPostDocument = gql`
    mutation UpdateTextualPost($postId: String!, $updateTextualPostInput: UpdateTextualPostInput!) {
  updateTextualPost(postId: $postId, updatePostInput: $updateTextualPostInput)
}
    `;
export type UpdateTextualPostMutationFn = Apollo.MutationFunction<UpdateTextualPostMutation, UpdateTextualPostMutationVariables>;

/**
 * __useUpdateTextualPostMutation__
 *
 * To run a mutation, you first call `useUpdateTextualPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTextualPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTextualPostMutation, { data, loading, error }] = useUpdateTextualPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      updateTextualPostInput: // value for 'updateTextualPostInput'
 *   },
 * });
 */
export function useUpdateTextualPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTextualPostMutation, UpdateTextualPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTextualPostMutation, UpdateTextualPostMutationVariables>(UpdateTextualPostDocument, options);
      }
export type UpdateTextualPostMutationHookResult = ReturnType<typeof useUpdateTextualPostMutation>;
export type UpdateTextualPostMutationResult = Apollo.MutationResult<UpdateTextualPostMutation>;
export type UpdateTextualPostMutationOptions = Apollo.BaseMutationOptions<UpdateTextualPostMutation, UpdateTextualPostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($postId: String!) {
  deletePost(postId: $postId)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const GenerateMediaAccessTokenDocument = gql`
    query GenerateMediaAccessToken {
  getMediaAccessToken
}
    `;

/**
 * __useGenerateMediaAccessTokenQuery__
 *
 * To run a query within a React component, call `useGenerateMediaAccessTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateMediaAccessTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateMediaAccessTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateMediaAccessTokenQuery(baseOptions?: Apollo.QueryHookOptions<GenerateMediaAccessTokenQuery, GenerateMediaAccessTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateMediaAccessTokenQuery, GenerateMediaAccessTokenQueryVariables>(GenerateMediaAccessTokenDocument, options);
      }
export function useGenerateMediaAccessTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateMediaAccessTokenQuery, GenerateMediaAccessTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateMediaAccessTokenQuery, GenerateMediaAccessTokenQueryVariables>(GenerateMediaAccessTokenDocument, options);
        }
export type GenerateMediaAccessTokenQueryHookResult = ReturnType<typeof useGenerateMediaAccessTokenQuery>;
export type GenerateMediaAccessTokenLazyQueryHookResult = ReturnType<typeof useGenerateMediaAccessTokenLazyQuery>;
export type GenerateMediaAccessTokenQueryResult = Apollo.QueryResult<GenerateMediaAccessTokenQuery, GenerateMediaAccessTokenQueryVariables>;
export const TrainSimilarPostRecommenderDocument = gql`
    query TrainSimilarPostRecommender {
  trainSimilarPostRecommender
}
    `;

/**
 * __useTrainSimilarPostRecommenderQuery__
 *
 * To run a query within a React component, call `useTrainSimilarPostRecommenderQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrainSimilarPostRecommenderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrainSimilarPostRecommenderQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrainSimilarPostRecommenderQuery(baseOptions?: Apollo.QueryHookOptions<TrainSimilarPostRecommenderQuery, TrainSimilarPostRecommenderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrainSimilarPostRecommenderQuery, TrainSimilarPostRecommenderQueryVariables>(TrainSimilarPostRecommenderDocument, options);
      }
export function useTrainSimilarPostRecommenderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrainSimilarPostRecommenderQuery, TrainSimilarPostRecommenderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrainSimilarPostRecommenderQuery, TrainSimilarPostRecommenderQueryVariables>(TrainSimilarPostRecommenderDocument, options);
        }
export type TrainSimilarPostRecommenderQueryHookResult = ReturnType<typeof useTrainSimilarPostRecommenderQuery>;
export type TrainSimilarPostRecommenderLazyQueryHookResult = ReturnType<typeof useTrainSimilarPostRecommenderLazyQuery>;
export type TrainSimilarPostRecommenderQueryResult = Apollo.QueryResult<TrainSimilarPostRecommenderQuery, TrainSimilarPostRecommenderQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  getUser {
    id
    email
    username
    role
    accountType
    isVerified
    active
    lastLogin
    createdAt
    updatedAt
    profile {
      id
      nickname
      bio
      mobileNo
      country
      gender
      dob
      interestedIn
      relationshipStatus
      website
      dpUrl
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const IsUsernameAvailableDocument = gql`
    query IsUsernameAvailable($username: String!) {
  isUsernameAvailable(username: $username)
}
    `;

/**
 * __useIsUsernameAvailableQuery__
 *
 * To run a query within a React component, call `useIsUsernameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUsernameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUsernameAvailableQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useIsUsernameAvailableQuery(baseOptions: Apollo.QueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
      }
export function useIsUsernameAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
        }
export type IsUsernameAvailableQueryHookResult = ReturnType<typeof useIsUsernameAvailableQuery>;
export type IsUsernameAvailableLazyQueryHookResult = ReturnType<typeof useIsUsernameAvailableLazyQuery>;
export type IsUsernameAvailableQueryResult = Apollo.QueryResult<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    username
    profile {
      id
      nickname
      bio
      mobileNo
      country
      gender
      dob
      interestedIn
      relationshipStatus
      website
      dpUrl
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($changePasswordInput: ChangePasswordInput!) {
  changePassword(changePasswordInput: $changePasswordInput)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      changePasswordInput: // value for 'changePasswordInput'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfilePictureDocument = gql`
    mutation ChangeProfilePicture($picture: Upload!) {
  changeProfilePicture(picture: $picture)
}
    `;
export type ChangeProfilePictureMutationFn = Apollo.MutationFunction<ChangeProfilePictureMutation, ChangeProfilePictureMutationVariables>;

/**
 * __useChangeProfilePictureMutation__
 *
 * To run a mutation, you first call `useChangeProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfilePictureMutation, { data, loading, error }] = useChangeProfilePictureMutation({
 *   variables: {
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useChangeProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProfilePictureMutation, ChangeProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProfilePictureMutation, ChangeProfilePictureMutationVariables>(ChangeProfilePictureDocument, options);
      }
export type ChangeProfilePictureMutationHookResult = ReturnType<typeof useChangeProfilePictureMutation>;
export type ChangeProfilePictureMutationResult = Apollo.MutationResult<ChangeProfilePictureMutation>;
export type ChangeProfilePictureMutationOptions = Apollo.BaseMutationOptions<ChangeProfilePictureMutation, ChangeProfilePictureMutationVariables>;
export const RemoveProfilePictureDocument = gql`
    mutation RemoveProfilePicture {
  removeProfilePicture
}
    `;
export type RemoveProfilePictureMutationFn = Apollo.MutationFunction<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>;

/**
 * __useRemoveProfilePictureMutation__
 *
 * To run a mutation, you first call `useRemoveProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfilePictureMutation, { data, loading, error }] = useRemoveProfilePictureMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>(RemoveProfilePictureDocument, options);
      }
export type RemoveProfilePictureMutationHookResult = ReturnType<typeof useRemoveProfilePictureMutation>;
export type RemoveProfilePictureMutationResult = Apollo.MutationResult<RemoveProfilePictureMutation>;
export type RemoveProfilePictureMutationOptions = Apollo.BaseMutationOptions<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>;