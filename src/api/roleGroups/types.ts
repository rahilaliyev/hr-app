import { type IRole } from '../roles/types';

import { type ID } from 'src/ts/interface';

export interface IRoleGroup extends ID {
  company_id: number;
  created_at: Date;
  name: string;
  roles: IRole[];
  updated_at: Date;
}

export interface IRoleGroupPayload {
  name: string;
  roles: number[];
  company_id: string;
}

export interface IUpdateRoleGroupPayload {
  id: string;
  body: IRoleGroupPayload;
}
