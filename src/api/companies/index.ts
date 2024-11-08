import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type ICompanies } from './types';

import { type IPaginateData } from 'src/ts/interface';

export const useGetCompanies = (page: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMPANIES, page],
    queryFn: async () => {
      const res = await api.get<IPaginateData<ICompanies[]>>('/companies', {
        params: { page },
      });
      return res.data;
    },
  });
};
