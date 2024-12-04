import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

export const useGetUserDetails = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_DETAILS, id],
    queryFn: async () => {
      const res = await api.get<IUsers>(`/users/${id}`);
      return res.data;
    },
    enabled: !!id,
    refetchOnMount: true,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USERS],
      });
    },
  });
};
