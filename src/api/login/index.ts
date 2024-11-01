import { useMutation } from '@tanstack/react-query';

import { axiosLogin } from '../axiosInstance';

import { type ILoginPayload, type ILoginResponse } from './types';

export const useLoginMutation = () => {
  return useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationFn: async (data: ILoginPayload) => {
      const res = await axiosLogin.post<ILoginResponse>('/auth/login', data);
      return res.data;
    }
  });
};
