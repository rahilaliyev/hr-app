import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IServiceId } from './types.ts';

export const useGetServiceOptions = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SERVICE_OPTIONS],
    queryFn: async () => {
      const res = await api.get<IServiceId[]>('/options');
      return res.data.map((opt) => ({ label: opt.label, value: opt.id }));
    },
  });
};
