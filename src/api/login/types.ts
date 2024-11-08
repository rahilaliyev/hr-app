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

interface IRole {
  company_id: number;
  created_at: Date;
  id: number;
  name: string;
  permission: string[];
  updated_at: Date;
}

interface IRoleGroups {
  company_id: number;
  created_at: Date;
  id: number;
  name: string;
  roles: IRole[];
  updated_at: Date;
}

export interface IUserDetails {
  companies: string[];
  created_at: Date;
  email: string;
  firstName: string;
  id: number;
  language_id: number;
  lastName: string;
  permission: string[];
  roleGroups: IRoleGroups[];
  roles: IRole;
  status: boolean;
  updated_at: Date;
  username: string;
}
