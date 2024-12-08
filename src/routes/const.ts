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
  USERS: {
    PATH: `${BASE_PATH}/users`,
    ADD: `${BASE_PATH}/users/add`,
    DETAIL: `${BASE_PATH}/users/detail/:id`,
    EDIT: `${BASE_PATH}/users/edit/:id`,
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
