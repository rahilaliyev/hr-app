import { type ID } from 'src/ts/interface';

export interface IPermission extends ID {
  created_at: Date | string;
  name: string;
  updated_at: Date | string;
}

export interface IRole extends ID {
  company_id: number;
  created_at: Date;
  name: string;
  permissions: IPermission[];
  updated_at: Date;
}

export interface IRolePayload {
  name: string;
  permissions: number[];
  company_id: string;
}

export interface IUpdateRolePayload {
  id: string;
  body: IRolePayload;
}
