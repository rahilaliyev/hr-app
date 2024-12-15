import { useQuery } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IModelInfo } from './types.ts';

export const useGetModelInfos = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.MODEL_INFOS],
    queryFn: async () => {
      const res = await api.get<IModelInfo[]>('/model-infos');
      return res.data;
    },
  });
};
