import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IRoleGroup, type IRoleGroupPayload, type IUpdateRoleGroupPayload } from './types';

import { ROUTES } from 'src/routes/const';

export const useGetRoleGroups = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLE_GROUPS],
    queryFn: async () => {
      const res = await api.get<IRoleGroup[]>('/role-groups');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useGetRoleGroupDetails = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLE_GROUPS_DETAILS, id],
    queryFn: async () => {
      const res = await api.get<IRoleGroup>(`/role-groups/${id}`);
      return res.data;
    },
    enabled: !!id,
    refetchOnMount: true,
  });
};

export const useCreateRoleGroup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async (body: IRoleGroupPayload): Promise<void> => {
    await api.post(`/role-groups`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      navigate(ROUTES.ROLE_GROUPS.PATH);
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLE_GROUPS],
      });
    },
  });
};

export const useUpdateRoleGroup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async ({ id, body }: IUpdateRoleGroupPayload): Promise<void> => {
    await api.put(`/role-groups/${id}`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLE_GROUPS],
      });
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLE_GROUPS_DETAILS, id],
      });
      navigate(ROUTES.ROLE_GROUPS.PATH);
    },
  });
};

export const useDeleteRoleGroup = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/role-groups/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ROLE_GROUPS],
      });
    },
  });
};
