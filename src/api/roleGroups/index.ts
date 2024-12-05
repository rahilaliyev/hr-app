import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IRoleGroups } from './types';

export const useGetRoleGroups = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLE_GROUPS],
    queryFn: async () => {
      const res = await api.get<IRoleGroups[]>('/role-groups');
      return res.data;
    },
    refetchOnMount: true,
  });
};
