import { type IRole } from '../roles/types';

import { type ID } from 'src/ts/interface';

export interface IRoleGroups extends ID {
  company_id: number;
  created_at: Date;
  name: string;
  roles: IRole[];
  updated_at: Date;
}
