import { type IPermission } from '../roles/types';

import { type ID } from 'src/ts/interface';

export interface IModelInfo extends ID {
  alias: string | null;
  created_at: string;
  name: string;
  updated_at: string;
  permissions: IPermission[];
}
