export interface IGoogleAuthResponse<TData = any, TInfo = any> {
  data: TData;
  info: TInfo;
}

export interface IGoogleUserData {
  accessToken: string;
  refreshToken: string;
  profile: IProfile;
}

export interface IProfile {
  provider: string;
  id: string;
  displayName: string;
  name: IName;
  emails: IEmail[];
  _raw: string;
  _json: IJSONProfile;
}

export interface IJSONProfile {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export interface IName {
  familyName: string;
  givenName: string;
}

export interface IEmail {
  value: string;
}
