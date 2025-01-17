import { type TFormValues } from 'src/pages/CompanyPage/CompanyAddEditPage/components/validationSchema';

import { type IServiceId } from '../options/types';

import { type ID } from 'src/ts/interface';

export interface ICompany extends ID {
  address: string;
  azn_account: string;
  bank_filial: string;
  bank_name: string;
  bank_voen: number;
  city: string;
  cor_account: string;
  country: string;
  created_at: Date | string;
  enterprise_head_fullname: string;
  enterprise_head_position: string;
  eur_account: string;
  founder: string;
  kod: string;
  name: string;
  poct_index: string;
  service_id: IServiceId;
  status: number;
  sun: string;
  swift: string;
  tel: string;
  updated_at: Date | string;
  usd_account: string;
  voen: number;
}

interface IUpdatePayloadBody extends TFormValues {
  update_user_id?: number;
}

export interface IUpdateCompanyPayload {
  id: string;
  body: IUpdatePayloadBody;
}
