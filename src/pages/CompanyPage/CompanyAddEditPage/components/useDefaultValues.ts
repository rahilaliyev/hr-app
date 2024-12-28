import { useMemo } from 'react';

import { type ICompany } from 'src/api/companies/types';

import { type TFormValues } from './validationSchema';

export const useDefaultValues = (data: ICompany | undefined): TFormValues =>
  useMemo(() => {
    return {
      name: data?.name ?? '',
      voen: data?.voen.toString() ?? '',
      sun: data?.sun ?? '',
      bank_voen: data?.bank_voen.toString() ?? '',
      bank_name: data?.bank_name ?? '',
      bank_filial: data?.bank_filial ?? '',
      kod: data?.kod ?? '',
      cor_account: data?.cor_account ?? '',
      swift: data?.swift ?? '',
      azn_account: data?.azn_account ?? '',
      usd_account: data?.usd_account ?? '',
      eur_account: data?.eur_account ?? '',
      country: data?.country ?? '',
      city: data?.city ?? '',
      address: data?.address ?? '',
      poct_index: data?.poct_index ?? '',
      tel: data?.tel ?? '',
      enterprise_head_fullname: data?.enterprise_head_fullname ?? '',
      enterprise_head_position: data?.enterprise_head_position ?? '',
      founder: data?.founder ?? '',
      service_id: data?.service_id?.id.toString() ?? '',
    };
  }, [data]);
