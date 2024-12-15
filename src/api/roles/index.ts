import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IRole, type IRolePayload, type IUpdateRolePayload } from './types';

import { ROUTES } from 'src/routes/const';

export const useGetRoles = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLES],
    queryFn: async () => {
      const res = await api.get<IRole[]>('/roles');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetRoleDetails = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLE_DETAILS, id],
    queryFn: async () => {
      const res = await api.get<IRole>(`/roles/${id}`);
      return res.data;
    },
    enabled: !!id,
    refetchOnMount: true,
  });
};

export const useCreateRole = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async (body: IRolePayload): Promise<void> => {
    await api.post(`/roles`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      navigate(ROUTES.ROLES.PATH);
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLES],
      });
    },
  });
};

export const useUpdateRole = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async ({ id, body }: IUpdateRolePayload): Promise<void> => {
    await api.put(`/roles/${id}`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLES],
      });
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLE_DETAILS, id],
      });
      navigate(ROUTES.ROLES.PATH);
    },
  });
};

export const useDeleteRole = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/roles/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLES],
      });
    },
  });
};
