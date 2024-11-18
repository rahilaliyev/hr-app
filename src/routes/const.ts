const BASE_PATH = '/dashboard';
const BASE_AUTH_PATH = '/auth';

export const ROUTES = {
  DEFAULT: {
    PATH: BASE_PATH,
  },
  COMPANIES: {
    PATH: `${BASE_PATH}/companies`,
    ADD: `${BASE_PATH}/companies/add`,
    DETAIL: `${BASE_PATH}/companies/detail/:id`,
    EDIT: `${BASE_PATH}/companies/edit/:id`,
  },
  EMPLOYEES: {
    PATH: `${BASE_PATH}/employees`,
  },
  AUTH: {
    PATH: BASE_AUTH_PATH,
    LOGIN: {
      PATH: `${BASE_AUTH_PATH}/login`,
    },
    FORGOT_PASSWORD: {
      PATH: `${BASE_AUTH_PATH}/forgot-password`,
    },
  },
};
