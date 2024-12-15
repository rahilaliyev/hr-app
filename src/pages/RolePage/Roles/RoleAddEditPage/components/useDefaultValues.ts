import { useMemo } from 'react';

import { type IRole } from 'src/api/roles/types';

import { type TFormValues } from './validationSchema';

export const useDefaultValues = (data: IRole | undefined, company: string | null): TFormValues =>
  useMemo(() => {
    const name = data?.name?.split('-');
    const permissions = data?.permissions?.flatMap((el) => el.id);

    return {
      companyId: data?.company_id.toString() ?? company ?? '',
      permissions: permissions?.length ? permissions : [],
      name: name?.[0] ?? '',
      nameCode: name?.[1] ?? company ?? '',
    };
  }, [data, company]);
