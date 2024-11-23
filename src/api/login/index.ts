import { useMutation, useQuery } from '@tanstack/react-query';

import { api, axiosLogin } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type ILoginPayload, type ILoginResponse, type IUserDetails } from './types';

export const useLoginMutation = () =>
  useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationFn: async (data: ILoginPayload) => {
      const res = await axiosLogin.post<ILoginResponse>('/auth/login', data);
      return res.data;
    },
  });

export const useGetUserDetailsById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_DETAILS, id],
    queryFn: async () => {
      const res = await api.get<IUserDetails>(`/users/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};
