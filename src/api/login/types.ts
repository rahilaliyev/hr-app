import { type EBearer } from 'src/ts/enums';

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  token_type: EBearer.BEARER;
  epires_in: number;
}
