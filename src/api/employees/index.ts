import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type IEmployees, type IFamilyInfo } from './types';

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

export const useGetEmployeeFamilyInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.FAMILY_INFO],
    queryFn: async () => {
      const res = await api.get<IFamilyInfo[]>('/family-infos');
      return res.data;
    },
    refetchOnMount: true,
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/employees/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EMPLOYEES],
      });
    },
  });
};

export const useDeleteEmployeeFamilyInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/family-infos/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FAMILY_INFO],
      });
    },
  });
};
