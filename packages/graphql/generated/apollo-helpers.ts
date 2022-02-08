import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ForgotPasswordOutputKeySpecifier = ('email' | 'isVerified' | 'message' | 'verificationUuid' | ForgotPasswordOutputKeySpecifier)[];
export type ForgotPasswordOutputFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationUuid?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MutationKeySpecifier = ('changePassword' | 'changeProfilePicture' | 'deactivateUser' | 'forgotPassword' | 'googleAuth' | 'login' | 'logout' | 'multipleUploadFile' | 'removeProfilePicture' | 'resetPassword' | 'signUp' | 'updateProfile' | 'updateUser' | 'verifyForgotPassword' | 'verifyUserEmail' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
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
	updateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyForgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyUserEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('_count' | 'createdAt' | 'id' | 'placeId' | 'type' | 'updatedAt' | 'userId' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	placeId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostCountKeySpecifier = ('activities' | 'comments' | 'likes' | 'photos' | 'tags' | PostCountKeySpecifier)[];
export type PostCountFieldPolicy = {
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
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
export type QueryKeySpecifier = ('getUser' | 'getUserPosts' | 'isUsernameAvailable' | 'test' | 'verifyAccessToken' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
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
export type StrictTypedTypePolicies = {
	ForgotPasswordOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForgotPasswordOutputKeySpecifier | (() => undefined | ForgotPasswordOutputKeySpecifier),
		fields?: ForgotPasswordOutputFieldPolicy,
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
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostCountKeySpecifier | (() => undefined | PostCountKeySpecifier),
		fields?: PostCountFieldPolicy,
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
	UpdateUserOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUserOutputKeySpecifier | (() => undefined | UpdateUserOutputKeySpecifier),
		fields?: UpdateUserOutputFieldPolicy,
	},
	UserOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserOutputKeySpecifier | (() => undefined | UserOutputKeySpecifier),
		fields?: UserOutputFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;