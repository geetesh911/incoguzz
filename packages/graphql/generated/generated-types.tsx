import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum AccountType {
  Anonymous = 'ANONYMOUS',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type AddPostInput = {
  caption?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Array<Scalars['Upload']>>;
  place?: InputMaybe<Scalars['String']>;
  pollOptions?: InputMaybe<Array<Scalars['String']>>;
  pollQuestion?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
  type: PostType;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type ForgotPasswordInput = {
  emailOrUsername: Scalars['String'];
};

export type ForgotPasswordOutput = {
  __typename?: 'ForgotPasswordOutput';
  email: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  verificationUuid?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

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

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['Boolean'];
  changeProfilePicture: Scalars['Boolean'];
  deactivateUser: Scalars['Boolean'];
  forgotPassword: ForgotPasswordOutput;
  googleAuth: GoogleAuthOutput;
  login: LoginOutput;
  logout: Scalars['Boolean'];
  multipleUploadFile: Scalars['Boolean'];
  removeProfilePicture: Scalars['Boolean'];
  resetPassword: ForgotPasswordOutput;
  signUp: SignUpOutput;
  updateProfile: ProfileOutput;
  updateUser: UpdateUserOutput;
  verifyForgotPassword?: Maybe<ForgotPasswordOutput>;
  verifyUserEmail?: Maybe<Scalars['Boolean']>;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangeProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationGoogleAuthArgs = {
  googleAuthInput: GoogleAuthInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationMultipleUploadFileArgs = {
  addPostInput: AddPostInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateProfileArgs = {
  profileInput: ProfileInput;
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

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  placeId?: Maybe<Scalars['String']>;
  type: PostType;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type PostCount = {
  __typename?: 'PostCount';
  activities: Scalars['Int'];
  comments: Scalars['Int'];
  likes: Scalars['Int'];
  photos: Scalars['Int'];
  tags: Scalars['Int'];
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
  getUser?: Maybe<UserOutput>;
  getUserPosts: Array<Post>;
  isUsernameAvailable?: Maybe<Scalars['Boolean']>;
  test: Scalars['String'];
  verifyAccessToken?: Maybe<Scalars['Boolean']>;
};


export type QueryIsUsernameAvailableArgs = {
  username: Scalars['String'];
};


export type QueryVerifyAccessTokenArgs = {
  accessToken: Scalars['String'];
};

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

export type UpdateUserInput = {
  profile: ProfileInput;
  username: Scalars['String'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  profile: Profile;
  username: Scalars['String'];
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

export type VerifyAccessTokenQueryVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type VerifyAccessTokenQuery = { __typename?: 'Query', verifyAccessToken?: boolean | null | undefined };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpOutput', id: string, email: string, username: string, isVerified: boolean } };

export type GoogleAuthMutationVariables = Exact<{
  googleAuthInput: GoogleAuthInput;
}>;


export type GoogleAuthMutation = { __typename?: 'Mutation', googleAuth: { __typename?: 'GoogleAuthOutput', id: string, email: string, username: string, accessToken?: string | null | undefined, refreshToken?: string | null | undefined, isVerified: boolean } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', id: string, email: string, username: string, accessToken: string, refreshToken: string, profile: { __typename?: 'Profile', id: string, nickname: string, bio?: string | null | undefined, mobileNo?: string | null | undefined, country?: string | null | undefined, gender?: Gender | null | undefined, dob?: any | null | undefined, interestedIn?: InterestedInTypes | null | undefined, relationshipStatus?: RelationshipStatus | null | undefined, website?: string | null | undefined, dpUrl?: string | null | undefined } } };

export type VerifyUserEmailMutationVariables = Exact<{
  verificationToken: Scalars['String'];
}>;


export type VerifyUserEmailMutation = { __typename?: 'Mutation', verifyUserEmail?: boolean | null | undefined };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordOutput', email: string, message: string, verificationUuid?: string | null | undefined, isVerified?: boolean | null | undefined } };

export type VerifyResetPasswordTokenMutationVariables = Exact<{
  verificatonToken: Scalars['String'];
}>;


export type VerifyResetPasswordTokenMutation = { __typename?: 'Mutation', verifyForgotPassword?: { __typename?: 'ForgotPasswordOutput', email: string, message: string, verificationUuid?: string | null | undefined, isVerified?: boolean | null | undefined } | null | undefined };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'ForgotPasswordOutput', email: string, message: string, verificationUuid?: string | null | undefined, isVerified?: boolean | null | undefined } };

export type DeactiveUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeactiveUserMutation = { __typename?: 'Mutation', deactivateUser: boolean };

export type UpdateProfileMutationVariables = Exact<{
  profileInput: ProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'ProfileOutput', id: string, nickname: string, bio?: string | null | undefined, mobileNo?: string | null | undefined, country?: string | null | undefined, gender?: Gender | null | undefined, dob?: any | null | undefined, interestedIn?: InterestedInTypes | null | undefined, relationshipStatus?: RelationshipStatus | null | undefined, website?: string | null | undefined, dpUrl?: string | null | undefined } };

export type GetUserPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserPostsQuery = { __typename?: 'Query', getUserPosts: Array<{ __typename?: 'Post', id: string }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'UserOutput', id: string, email: string, username: string, role: Role, accountType: AccountType, isVerified: boolean, active: boolean, lastLogin: any, createdAt: any, updatedAt: any, profile: { __typename?: 'Profile', id: string, nickname: string, bio?: string | null | undefined, mobileNo?: string | null | undefined, country?: string | null | undefined, gender?: Gender | null | undefined, dob?: any | null | undefined, interestedIn?: InterestedInTypes | null | undefined, relationshipStatus?: RelationshipStatus | null | undefined, website?: string | null | undefined, dpUrl?: string | null | undefined } } | null | undefined };

export type IsUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable?: boolean | null | undefined };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UpdateUserOutput', username: string, profile: { __typename?: 'Profile', id: string, nickname: string, bio?: string | null | undefined, mobileNo?: string | null | undefined, country?: string | null | undefined, gender?: Gender | null | undefined, dob?: any | null | undefined, interestedIn?: InterestedInTypes | null | undefined, relationshipStatus?: RelationshipStatus | null | undefined, website?: string | null | undefined, dpUrl?: string | null | undefined } } };

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
export const GetUserPostsDocument = gql`
    query GetUserPosts {
  getUserPosts {
    id
  }
}
    `;

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
 *   },
 * });
 */
export function useGetUserPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>) {
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