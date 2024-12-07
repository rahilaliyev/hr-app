import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type ILanguage } from './types';

export const useGetLanguages = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.LANGUAGES],
    queryFn: async () => {
      const res = await api.get<ILanguage[]>('/languages');
      return res.data;
    },
    refetchOnMount: true,
  });
};
