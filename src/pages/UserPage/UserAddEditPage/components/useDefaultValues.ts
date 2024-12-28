import { useMemo } from 'react';

import { type IUser } from 'src/api/users/types';

import { type TFormValues } from './validationSchema';

export const useDefaultValues = (data: IUser | undefined): TFormValues =>
  useMemo(() => {
    const userCheckData = !!data?.employee?.id;
    const roleGroupsData = data?.roleGroups?.map((role) => role?.id);
    const companiesData = data?.companies?.map((company) => company?.id);

    return {
      id: data?.id?.toString(),
      username: data?.username ?? '',
      userCheck: userCheckData,
      employee_id: userCheckData ? data?.employee?.id.toString() : '',
      language_id: data?.language_id.toString() ?? '',
      role_groups: roleGroupsData ?? [],
      password: '',
      password_confirmation: '',
      companies: companiesData ?? [],
      firstname: !userCheckData ? data?.firstname : '',
      lastname: !userCheckData ? data?.lastname : '',
      email: !userCheckData ? data?.email : '',
    };
  }, [data]);
