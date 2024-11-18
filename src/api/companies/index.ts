import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { type TFormValues } from 'src/pages/CompanyPage/CompanyAddEditPage/components/validationSchema';

import { api } from '../axiosInstance';
import { QUERY_KEYS } from '../QUERY_KEYS';

import { type ICompanies, type IUpdateCompanyPayload } from './types';

import { ROUTES } from 'src/routes/const';
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
    refetchOnMount: true,
  });
};

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (id: number): Promise<void> => {
    await api.delete(`/companies/${id}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPANIES],
      });
    },
  });
};

export const useGetCompanyDetails = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMPANY_DETAILS, id],
    queryFn: async () => {
      const res = await api.get<ICompanies>(`/companies/${id}`);
      return res.data;
    },
    enabled: !!id,
    refetchOnMount: true,
  });
};

export const useCreateCompany = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async (body: TFormValues): Promise<void> => {
    await api.post(`/companies`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      navigate(ROUTES.COMPANIES.PATH);
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPANIES],
      });
    },
  });
};

export const useUpdateCompany = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationFn = async ({ id, body }: IUpdateCompanyPayload): Promise<void> => {
    await api.put(`/companies/${id}`, body);
  };

  return useMutation({
    mutationFn,
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPANIES],
      });
      void queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPANY_DETAILS, id],
      });
      navigate(ROUTES.COMPANIES.PATH);
    },
  });
};
