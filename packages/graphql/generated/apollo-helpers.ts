import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AudioKeySpecifier = ('id' | 'postId' | 'thumbnailUrl' | 'url' | AudioKeySpecifier)[];
export type AudioFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookmarkKeySpecifier = ('createdAt' | 'id' | 'postId' | 'updatedAt' | 'userId' | BookmarkKeySpecifier)[];
export type BookmarkFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookmarkOutputKeySpecifier = ('createdAt' | 'id' | 'post' | 'postId' | 'updatedAt' | 'userId' | BookmarkOutputKeySpecifier)[];
export type BookmarkOutputFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookmarkPostOutputKeySpecifier = ('bookmarked' | 'postId' | BookmarkPostOutputKeySpecifier)[];
export type BookmarkPostOutputFieldPolicy = {
	bookmarked?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookmarksOutputKeySpecifier = ('data' | 'pagination' | BookmarksOutputKeySpecifier)[];
export type BookmarksOutputFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClipAudioKeySpecifier = ('_count' | 'audioUrl' | 'id' | 'name' | ClipAudioKeySpecifier)[];
export type ClipAudioFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	audioUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClipAudioCountKeySpecifier = ('clips' | ClipAudioCountKeySpecifier)[];
export type ClipAudioCountFieldPolicy = {
	clips?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClipOutputKeySpecifier = ('clipAudio' | 'id' | 'thumbnailUrl' | 'url' | ClipOutputKeySpecifier)[];
export type ClipOutputFieldPolicy = {
	clipAudio?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForgotPasswordOutputKeySpecifier = ('email' | 'isVerified' | 'message' | 'verificationTokenId' | 'verificationUuid' | ForgotPasswordOutputKeySpecifier)[];
export type ForgotPasswordOutputFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationTokenId?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationUuid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetMessagesOuputKeySpecifier = ('data' | 'pagination' | GetMessagesOuputKeySpecifier)[];
export type GetMessagesOuputFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetPostsOutputKeySpecifier = ('data' | 'pagination' | GetPostsOutputKeySpecifier)[];
export type GetPostsOutputFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GoogleAuthOutputKeySpecifier = ('accessToken' | 'email' | 'id' | 'isVerified' | 'refreshToken' | 'username' | GoogleAuthOutputKeySpecifier)[];
export type GoogleAuthOutputFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginOutputKeySpecifier = ('accessToken' | 'email' | 'id' | 'profile' | 'refreshToken' | 'username' | LoginOutputKeySpecifier)[];
export type LoginOutputFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('_count' | 'createdAt' | 'id' | 'mediaThumbnailUrl' | 'mediaType' | 'mediaUrl' | 'message' | 'postId' | 'replyToId' | 'sourceUserId' | 'storyId' | 'targetUserId' | 'updatedAt' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaThumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaType?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	replyToId?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	storyId?: FieldPolicy<any> | FieldReadFunction<any>,
	targetUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageCountKeySpecifier = ('replyToMessage' | MessageCountKeySpecifier)[];
export type MessageCountFieldPolicy = {
	replyToMessage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageOutputKeySpecifier = ('createdAt' | 'id' | 'mediaThumbnailUrl' | 'mediaType' | 'mediaUrl' | 'message' | 'post' | 'replyTo' | 'sourceUser' | 'story' | 'targetUser' | 'updatedAt' | MessageOutputKeySpecifier)[];
export type MessageOutputFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaThumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaType?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUser?: FieldPolicy<any> | FieldReadFunction<any>,
	story?: FieldPolicy<any> | FieldReadFunction<any>,
	targetUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addClipPost' | 'addMediaPost' | 'addMessage' | 'addPollPost' | 'addTextualPost' | 'bookmarkPost' | 'changePassword' | 'changeProfilePicture' | 'deactivateUser' | 'deleteMessage' | 'deletePost' | 'forgotPassword' | 'googleAuth' | 'incrementPostView' | 'login' | 'logout' | 'multipleUploadFile' | 'postReaction' | 'removeProfilePicture' | 'resetPassword' | 'signUp' | 'singleUpload' | 'updateMediaPost' | 'updateProfile' | 'updateTextualPost' | 'updateUser' | 'verifyForgotPassword' | 'verifyUserEmail' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addClipPost?: FieldPolicy<any> | FieldReadFunction<any>,
	addMediaPost?: FieldPolicy<any> | FieldReadFunction<any>,
	addMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	addPollPost?: FieldPolicy<any> | FieldReadFunction<any>,
	addTextualPost?: FieldPolicy<any> | FieldReadFunction<any>,
	bookmarkPost?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	changeProfilePicture?: FieldPolicy<any> | FieldReadFunction<any>,
	deactivateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	googleAuth?: FieldPolicy<any> | FieldReadFunction<any>,
	incrementPostView?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	postReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProfilePicture?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMediaPost?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTextualPost?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyForgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyUserEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationOutputKeySpecifier = ('cursor' | PaginationOutputKeySpecifier)[];
export type PaginationOutputFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoKeySpecifier = ('id' | 'postId' | 'url' | PhotoKeySpecifier)[];
export type PhotoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceKeySpecifier = ('_count' | 'address' | 'id' | 'name' | PlaceKeySpecifier)[];
export type PlaceFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceCountKeySpecifier = ('posts' | PlaceCountKeySpecifier)[];
export type PlaceCountFieldPolicy = {
	posts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PollOptionKeySpecifier = ('_count' | 'id' | 'option' | 'pollId' | PollOptionKeySpecifier)[];
export type PollOptionFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	pollId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PollOptionCountKeySpecifier = ('pollAnswers' | PollOptionCountKeySpecifier)[];
export type PollOptionCountFieldPolicy = {
	pollAnswers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PollOutputKeySpecifier = ('id' | 'pollOptions' | 'postId' | 'question' | PollOutputKeySpecifier)[];
export type PollOutputFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pollOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	question?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('_count' | 'archive' | 'caption' | 'createdAt' | 'id' | 'metaTags' | 'placeId' | 'published' | 'slug' | 'type' | 'updatedAt' | 'userId' | 'views' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	archive?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metaTags?: FieldPolicy<any> | FieldReadFunction<any>,
	placeId?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostCountKeySpecifier = ('activities' | 'bookmarks' | 'comments' | 'message' | 'photos' | 'reactions' | 'tags' | PostCountKeySpecifier)[];
export type PostCountFieldPolicy = {
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	bookmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostOutputKeySpecifier = ('_count' | 'audio' | 'bookmarks' | 'caption' | 'clip' | 'createdAt' | 'id' | 'photos' | 'place' | 'poll' | 'reactions' | 'tags' | 'textual' | 'type' | 'updatedAt' | 'userId' | 'video' | 'views' | PostOutputKeySpecifier)[];
export type PostOutputFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	audio?: FieldPolicy<any> | FieldReadFunction<any>,
	bookmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	clip?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	textual?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('bio' | 'country' | 'dob' | 'dpUrl' | 'gender' | 'id' | 'interestedIn' | 'mobileNo' | 'nickname' | 'relationshipStatus' | 'userId' | 'website' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	dpUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interestedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileNo?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	relationshipStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileOutputKeySpecifier = ('bio' | 'country' | 'dob' | 'dpUrl' | 'gender' | 'id' | 'interestedIn' | 'mobileNo' | 'nickname' | 'relationshipStatus' | 'website' | ProfileOutputKeySpecifier)[];
export type ProfileOutputFieldPolicy = {
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	dpUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interestedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileNo?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	relationshipStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getBookmarkedPosts' | 'getExplorePosts' | 'getMediaAccessToken' | 'getMessages' | 'getPost' | 'getRelatedPosts' | 'getSimilarPosts' | 'getUser' | 'getUserPosts' | 'isUsernameAvailable' | 'test' | 'trainSimilarPostRecommender' | 'verifyAccessToken' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getBookmarkedPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getExplorePosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getMediaAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	getMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	getPost?: FieldPolicy<any> | FieldReadFunction<any>,
	getRelatedPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getSimilarPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	isUsernameAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	test?: FieldPolicy<any> | FieldReadFunction<any>,
	trainSimilarPostRecommender?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyAccessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionKeySpecifier = ('createdAt' | 'id' | 'postId' | 'reaction' | 'updatedAt' | 'userId' | ReactionKeySpecifier)[];
export type ReactionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionOutputKeySpecifier = ('createdAt' | 'deleted' | 'id' | 'postId' | 'reaction' | 'updatedAt' | 'userId' | ReactionOutputKeySpecifier)[];
export type ReactionOutputFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignUpOutputKeySpecifier = ('email' | 'id' | 'isVerified' | 'username' | SignUpOutputKeySpecifier)[];
export type SignUpOutputFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryKeySpecifier = ('_count' | 'createdAt' | 'id' | 'link' | 'mediaUrl' | 'updatedAt' | 'userId' | StoryKeySpecifier)[];
export type StoryFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryCountKeySpecifier = ('message' | StoryCountKeySpecifier)[];
export type StoryCountFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('newMessage' | 'newMessageNotification' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	newMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	newMessageNotification?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('_count' | 'id' | 'name' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagCountKeySpecifier = ('posts' | TagCountKeySpecifier)[];
export type TagCountFieldPolicy = {
	posts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextualKeySpecifier = ('id' | 'postId' | 'text' | TextualKeySpecifier)[];
export type TextualFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUserOutputKeySpecifier = ('profile' | 'username' | UpdateUserOutputKeySpecifier)[];
export type UpdateUserOutputFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('_count' | 'accountType' | 'active' | 'blockExpires' | 'createdAt' | 'email' | 'googleUserId' | 'id' | 'isVerified' | 'lastLogin' | 'loginAttempts' | 'password' | 'role' | 'updatedAt' | 'username' | 'verificationExpires' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	accountType?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	blockExpires?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	googleUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	loginAttempts?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationExpires?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountKeySpecifier = ('activities' | 'blocked' | 'blockedBy' | 'bookmarks' | 'commentReplies' | 'comments' | 'followers' | 'followings' | 'pollAnswers' | 'posts' | 'reactions' | 'receivedFollowRequests' | 'receivedMessages' | 'sentFollowRequests' | 'sentMessages' | 'stories' | 'tokens' | UserCountKeySpecifier)[];
export type UserCountFieldPolicy = {
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	bookmarks?: FieldPolicy<any> | FieldReadFunction<any>,
	commentReplies?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	followers?: FieldPolicy<any> | FieldReadFunction<any>,
	followings?: FieldPolicy<any> | FieldReadFunction<any>,
	pollAnswers?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	receivedFollowRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	receivedMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	sentFollowRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	sentMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	stories?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserOutputKeySpecifier = ('accountType' | 'active' | 'createdAt' | 'email' | 'id' | 'isVerified' | 'lastLogin' | 'profile' | 'role' | 'updatedAt' | 'username' | UserOutputKeySpecifier)[];
export type UserOutputFieldPolicy = {
	accountType?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoKeySpecifier = ('id' | 'postId' | 'thumbnailUrl' | 'url' | VideoKeySpecifier)[];
export type VideoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Audio?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AudioKeySpecifier | (() => undefined | AudioKeySpecifier),
		fields?: AudioFieldPolicy,
	},
	Bookmark?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookmarkKeySpecifier | (() => undefined | BookmarkKeySpecifier),
		fields?: BookmarkFieldPolicy,
	},
	BookmarkOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookmarkOutputKeySpecifier | (() => undefined | BookmarkOutputKeySpecifier),
		fields?: BookmarkOutputFieldPolicy,
	},
	BookmarkPostOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookmarkPostOutputKeySpecifier | (() => undefined | BookmarkPostOutputKeySpecifier),
		fields?: BookmarkPostOutputFieldPolicy,
	},
	BookmarksOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookmarksOutputKeySpecifier | (() => undefined | BookmarksOutputKeySpecifier),
		fields?: BookmarksOutputFieldPolicy,
	},
	ClipAudio?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClipAudioKeySpecifier | (() => undefined | ClipAudioKeySpecifier),
		fields?: ClipAudioFieldPolicy,
	},
	ClipAudioCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClipAudioCountKeySpecifier | (() => undefined | ClipAudioCountKeySpecifier),
		fields?: ClipAudioCountFieldPolicy,
	},
	ClipOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClipOutputKeySpecifier | (() => undefined | ClipOutputKeySpecifier),
		fields?: ClipOutputFieldPolicy,
	},
	ForgotPasswordOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForgotPasswordOutputKeySpecifier | (() => undefined | ForgotPasswordOutputKeySpecifier),
		fields?: ForgotPasswordOutputFieldPolicy,
	},
	GetMessagesOuput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetMessagesOuputKeySpecifier | (() => undefined | GetMessagesOuputKeySpecifier),
		fields?: GetMessagesOuputFieldPolicy,
	},
	GetPostsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetPostsOutputKeySpecifier | (() => undefined | GetPostsOutputKeySpecifier),
		fields?: GetPostsOutputFieldPolicy,
	},
	GoogleAuthOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GoogleAuthOutputKeySpecifier | (() => undefined | GoogleAuthOutputKeySpecifier),
		fields?: GoogleAuthOutputFieldPolicy,
	},
	LoginOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginOutputKeySpecifier | (() => undefined | LoginOutputKeySpecifier),
		fields?: LoginOutputFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	MessageCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageCountKeySpecifier | (() => undefined | MessageCountKeySpecifier),
		fields?: MessageCountFieldPolicy,
	},
	MessageOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageOutputKeySpecifier | (() => undefined | MessageOutputKeySpecifier),
		fields?: MessageOutputFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PaginationOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationOutputKeySpecifier | (() => undefined | PaginationOutputKeySpecifier),
		fields?: PaginationOutputFieldPolicy,
	},
	Photo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoKeySpecifier | (() => undefined | PhotoKeySpecifier),
		fields?: PhotoFieldPolicy,
	},
	Place?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier),
		fields?: PlaceFieldPolicy,
	},
	PlaceCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceCountKeySpecifier | (() => undefined | PlaceCountKeySpecifier),
		fields?: PlaceCountFieldPolicy,
	},
	PollOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PollOptionKeySpecifier | (() => undefined | PollOptionKeySpecifier),
		fields?: PollOptionFieldPolicy,
	},
	PollOptionCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PollOptionCountKeySpecifier | (() => undefined | PollOptionCountKeySpecifier),
		fields?: PollOptionCountFieldPolicy,
	},
	PollOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PollOutputKeySpecifier | (() => undefined | PollOutputKeySpecifier),
		fields?: PollOutputFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostCountKeySpecifier | (() => undefined | PostCountKeySpecifier),
		fields?: PostCountFieldPolicy,
	},
	PostOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostOutputKeySpecifier | (() => undefined | PostOutputKeySpecifier),
		fields?: PostOutputFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	ProfileOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileOutputKeySpecifier | (() => undefined | ProfileOutputKeySpecifier),
		fields?: ProfileOutputFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Reaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionKeySpecifier | (() => undefined | ReactionKeySpecifier),
		fields?: ReactionFieldPolicy,
	},
	ReactionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionOutputKeySpecifier | (() => undefined | ReactionOutputKeySpecifier),
		fields?: ReactionOutputFieldPolicy,
	},
	SignUpOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignUpOutputKeySpecifier | (() => undefined | SignUpOutputKeySpecifier),
		fields?: SignUpOutputFieldPolicy,
	},
	Story?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryKeySpecifier | (() => undefined | StoryKeySpecifier),
		fields?: StoryFieldPolicy,
	},
	StoryCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryCountKeySpecifier | (() => undefined | StoryCountKeySpecifier),
		fields?: StoryCountFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	TagCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagCountKeySpecifier | (() => undefined | TagCountKeySpecifier),
		fields?: TagCountFieldPolicy,
	},
	Textual?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextualKeySpecifier | (() => undefined | TextualKeySpecifier),
		fields?: TextualFieldPolicy,
	},
	UpdateUserOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUserOutputKeySpecifier | (() => undefined | UpdateUserOutputKeySpecifier),
		fields?: UpdateUserOutputFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountKeySpecifier | (() => undefined | UserCountKeySpecifier),
		fields?: UserCountFieldPolicy,
	},
	UserOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserOutputKeySpecifier | (() => undefined | UserOutputKeySpecifier),
		fields?: UserOutputFieldPolicy,
	},
	Video?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoKeySpecifier | (() => undefined | VideoKeySpecifier),
		fields?: VideoFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;