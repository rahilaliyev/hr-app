import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type Method,
} from 'axios';
import { enqueueSnackbar } from 'notistack';
import qs from 'qs';

import { getAccessToken, removeAuthCookies } from 'src/utils/cookie';

const END_POINT = import.meta.env.VITE_BASE_URL;
const BASE_URL = END_POINT + '/api';
const authToken = getAccessToken();

export const axiosLogin: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { indices: false });
  },
});

const onRequestSend = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getAccessToken();

  if (typeof token === 'string') {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError) => Promise.reject(error);

const onResponseSuccess = (res: AxiosResponse): Promise<AxiosResponse> => {
  const mutationMethods: Method[] = ['put', 'delete', 'post', 'PUT', 'DELETE', 'POST'];

  if (mutationMethods.includes(res.config.method as Method)) {
    enqueueSnackbar({ message: 'Uğurlu əməliyyat', variant: 'success' });
  }

  return Promise.resolve(res);
};

const onResponseFailed = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { data, status } = error.response ?? {};

    console.error('Error Details:', {
      method,
      url,
      status,
      statusText: data.message,
      message,
    });

    switch (status) {
      case 401:
        removeAuthCookies();
        window.location.href = '/auth/login';
        enqueueSnackbar({ message: data.message, variant: 'error' });
        break;
      default:
        enqueueSnackbar({ message: data.message, variant: 'error' });
    }
    return Promise.reject(error);
  } else {
    return Promise.reject(new Error('Unexpected error'));
  }
};

api.interceptors.request.use(onRequestSend, onRequestError);

api.interceptors.response.use(onResponseSuccess, onResponseFailed);
