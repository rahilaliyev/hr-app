import { type ID } from 'src/ts/interface';

export interface IRole {
  company_id: number;
  created_at: Date;
  id: number;
  name: string;
  permission: string[];
  updated_at: Date;
}

export interface IRoleGroups extends ID {
  company_id: number;
  created_at: Date;
  name: string;
  roles: IRole[];
  updated_at: Date;
}
