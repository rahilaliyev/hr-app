import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IUsers } from './types';

export const useGetUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: async () => {
      const res = await api.get<IUsers[]>('/users');
      return res.data;
    },
  });
};
