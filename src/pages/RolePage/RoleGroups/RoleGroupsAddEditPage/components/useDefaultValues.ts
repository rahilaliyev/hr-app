import { useMemo } from 'react';

import { type IRoleGroup } from 'src/api/roleGroups/types';

import { type TFormValues } from './validationSchema';

export const useDefaultValues = (data: IRoleGroup | undefined, company: string | null): TFormValues =>
  useMemo(() => {
    const name = data?.name?.split('-');
    const roles = data?.roles?.map((el) => el?.id?.toString());

    return {
      companyId: data?.company_id?.toString() ?? company ?? '',
      roles: roles?.length ? roles : [],
      name: name?.[0] ?? '',
      nameCode: name?.[1] ?? company ?? '',
    };
  }, [data, company]);
