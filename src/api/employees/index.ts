import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IEmployees } from './types';

export const useGetEmployees = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: async () => {
      const res = await api.get<IEmployees[]>('/employees');
      return res.data;
    },
    refetchOnMount: true,
  });
};
