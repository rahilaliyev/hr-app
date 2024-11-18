import { useMemo } from 'react';

export const useDefaultValues = () =>
  useMemo(() => {
    return {
      name: '',
      voen: '',
      sun: '',
      bank_name: '',
      bank_filial: '',
      kod: '',
      cor_account: '',
      swift: '',
      azn_account: '',
      usd_account: '',
      eur_account: '',
      country: '',
      city: '',
      address: '',
      poct_index: '',
      tel: '',
      enterprise_head_fullname: '',
      enterprise_head_position: '',
      founder: '',
      service_id: '',
    };
  }, []);
