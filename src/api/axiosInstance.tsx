import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import qs from 'qs';

import { getAccessToken } from 'src/utils/cookie';

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

const onResponseSuccess = (config: AxiosResponse): AxiosResponse => config;

const onResponseFailed = (error: AxiosError | Error): AxiosError => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { statusText, status } = error.response ?? {};

    console.error('Error Details:', {
      method,
      url,
      status,
      statusText,
      message,
    });

    switch (status) {
      case 401:
        console.warn('401 Unauthorized access - redirecting to login');
        break;
      case 403:
        console.warn('403 Access forbidden - you do not have permission');
        break;
      case 404:
        console.warn('404 Requested resource not found');
        break;
      default:
        console.warn('An unexpected error occurred' + status);
    }
  } else {
    console.error('An unexpected error occurred:', error.message);
  }

  return error as AxiosError;
};

api.interceptors.request.use(onRequestSend, onRequestError);

api.interceptors.response.use(onResponseSuccess, onResponseFailed);
