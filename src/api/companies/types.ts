import { type ID } from 'src/ts/interface';

export interface ICompanies extends ID {
  address: string;
  azn_account: string;
  bank_filial: string;
  bank_name: string;
  bank_voen: number;
  city: string;
  cor_account: string;
  country: string;
  created_at: Date;
  enterprise_head_fullname: string;
  enterprise_head_position: string;
  eur_account: string;
  founder: string;
  kod: string;
  name: string;
  poct_index: string;
  service_id: number;
  status: number;
  sun: string;
  swift: string;
  tel: string;
  updated_at: Date;
  usd_account: string;
  voen: number;
}
