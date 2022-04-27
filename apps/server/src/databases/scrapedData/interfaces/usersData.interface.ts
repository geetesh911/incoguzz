export interface IProfileCreate {
  nickname: string;
  dpUrl: string;
}

export interface IProfile {
  create: IProfileCreate;
}

export interface IUser {
  email: string;
  username: string;
  password: string;
  isVerified: boolean;
  profile: IProfile;
}
