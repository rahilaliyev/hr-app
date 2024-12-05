import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { type TFormValues } from 'src/pages/UserPage/UserAddEditPage/components/validationSchema';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IUpdateUserPayload, type IUsers } from './types';

import { ROUTES } from 'src/routes/const';

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

export const useCreateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async (body: TFormValues): Promise<void> => {
    await api.post(`/users`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      navigate(ROUTES.USERS.PATH);
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USERS],
      });
    },
  });
};

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async ({ id, body }: IUpdateUserPayload): Promise<void> => {
    await api.put(`/users/${id}`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USERS],
      });
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_DETAILS, id],
      });
      navigate(ROUTES.USERS.PATH);
    },
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
