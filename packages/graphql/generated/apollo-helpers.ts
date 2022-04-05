import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AudioKeySpecifier = ('id' | 'postId' | 'thumbnailUrl' | 'url' | AudioKeySpecifier)[];
export type AudioFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
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
export type GetPostsOutputKeySpecifier = ('pagination' | 'posts' | GetPostsOutputKeySpecifier)[];
export type GetPostsOutputFieldPolicy = {
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MutationKeySpecifier = ('addClipPost' | 'addMediaPost' | 'addPollPost' | 'addTextualPost' | 'changePassword' | 'changeProfilePicture' | 'deactivateUser' | 'forgotPassword' | 'googleAuth' | 'login' | 'logout' | 'multipleUploadFile' | 'removeProfilePicture' | 'resetPassword' | 'signUp' | 'singleUpload' | 'updateProfile' | 'updateUser' | 'verifyForgotPassword' | 'verifyUserEmail' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addClipPost?: FieldPolicy<any> | FieldReadFunction<any>,
	addMediaPost?: FieldPolicy<any> | FieldReadFunction<any>,
	addPollPost?: FieldPolicy<any> | FieldReadFunction<any>,
	addTextualPost?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	changeProfilePicture?: FieldPolicy<any> | FieldReadFunction<any>,
	deactivateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	googleAuth?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProfilePicture?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type PostKeySpecifier = ('_count' | 'archive' | 'caption' | 'createdAt' | 'id' | 'placeId' | 'published' | 'slug' | 'type' | 'updatedAt' | 'userId' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	archive?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	placeId?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostCountKeySpecifier = ('activities' | 'comments' | 'likes' | 'message' | 'photos' | 'tags' | PostCountKeySpecifier)[];
export type PostCountFieldPolicy = {
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostOutputKeySpecifier = ('_count' | 'audio' | 'caption' | 'clip' | 'createdAt' | 'id' | 'photos' | 'place' | 'poll' | 'tags' | 'textual' | 'type' | 'updatedAt' | 'userId' | 'video' | PostOutputKeySpecifier)[];
export type PostOutputFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	audio?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	clip?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	textual?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>
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
export type QueryKeySpecifier = ('getAllPosts' | 'getMediaAccessToken' | 'getUser' | 'getUserPosts' | 'isUsernameAvailable' | 'test' | 'verifyAccessToken' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getAllPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getMediaAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	isUsernameAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	test?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyAccessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignUpOutputKeySpecifier = ('email' | 'id' | 'isVerified' | 'username' | SignUpOutputKeySpecifier)[];
export type SignUpOutputFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
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
	SignUpOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignUpOutputKeySpecifier | (() => undefined | SignUpOutputKeySpecifier),
		fields?: SignUpOutputFieldPolicy,
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