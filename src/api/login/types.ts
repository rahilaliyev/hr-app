import { type EAuth } from 'src/ts/enums';

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  token_type: EAuth.BEARER;
  epires_in: number;
}

export interface IAuthToken {
  sub: string;
}
