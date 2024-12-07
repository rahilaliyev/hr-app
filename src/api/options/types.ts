import { type ID } from 'src/ts/interface';

export interface IServiceId extends ID {
  created_at: string | Date;
  updated_at: string | Date;
  label: string;
}
