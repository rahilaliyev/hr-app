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
  ROLES: {
    PATH: `${BASE_PATH}/roles`,
    ADD: `${BASE_PATH}/roles/add`,
    DETAIL: `${BASE_PATH}/roles/detail/:id`,
    EDIT: `${BASE_PATH}/roles/edit/:id`,
  },
  ROLE_GROUPS: {
    PATH: `${BASE_PATH}/role-groups`,
    ADD: `${BASE_PATH}/role-groups/add`,
    DETAIL: `${BASE_PATH}/role-groups/detail/:id`,
    EDIT: `${BASE_PATH}/role-groups/edit/:id`,
  },
  EMPLOYEES: {
    PATH: `${BASE_PATH}/employees`,
    ADD: `${BASE_PATH}/employees/add`,
    DETAIL: `${BASE_PATH}/employees/detail/:id`,
    EDIT: `${BASE_PATH}/employees/edit/:id`,
    FAMILY_INFO: {
      PATH: `${BASE_PATH}/employees/family-info`,
      ADD: `${BASE_PATH}/employees/family-info/add`,
      DETAIL: `${BASE_PATH}/employees/family-info/detail/:id`,
      EDIT: `${BASE_PATH}/employees/family-info/edit/:id`,
    },
    MILITARY_INFO: {
      PATH: `${BASE_PATH}/employees/military-info`,
      ADD: `${BASE_PATH}/employees/military-info/add`,
      DETAIL: `${BASE_PATH}/employees/military-info/detail/:id`,
      EDIT: `${BASE_PATH}/employees/military-info/edit/:id`,
    },
    WORKER_CONTRACTS: {
      PATH: `${BASE_PATH}/employees/worker-contracts`,
      ADD: `${BASE_PATH}/employees/worker-contracts/add`,
      DETAIL: `${BASE_PATH}/employees/worker-contracts/detail/:id`,
      EDIT: `${BASE_PATH}/employees/worker-contracts/edit/:id`,
    },
    WORK_PLACES: {
      PATH: `${BASE_PATH}/employees/work-places`,
      ADD: `${BASE_PATH}/employees/work-places/add`,
      DETAIL: `${BASE_PATH}/employees/work-places/detail/:id`,
      EDIT: `${BASE_PATH}/employees/work-places/edit/:id`,
    },
    EDUCATION_INFO: {
      PATH: `${BASE_PATH}/employees/education-info`,
      ADD: `${BASE_PATH}/employees/education-info/add`,
      DETAIL: `${BASE_PATH}/employees/education-info/detail/:id`,
      EDIT: `${BASE_PATH}/employees/education-info/edit/:id`,
    },
    CERTIFICATES: {
      PATH: `${BASE_PATH}/employees/certificates`,
      ADD: `${BASE_PATH}/employees/certificates/add`,
      DETAIL: `${BASE_PATH}/employees/certificates/detail/:id`,
      EDIT: `${BASE_PATH}/employees/certificates/edit/:id`,
    },
    LANGUAGES: {
      PATH: `${BASE_PATH}/employees/languages`,
      ADD: `${BASE_PATH}/employees/languages/add`,
      DETAIL: `${BASE_PATH}/employees/languages/detail/:id`,
      EDIT: `${BASE_PATH}/employees/languages/edit/:id`,
    },
    SKILLS: {
      PATH: `${BASE_PATH}/employees/skills`,
      ADD: `${BASE_PATH}/employees/skills/add`,
      DETAIL: `${BASE_PATH}/employees/skills/detail/:id`,
      EDIT: `${BASE_PATH}/employees/skills/edit/:id`,
    },
    DRIVER_LICENSE: {
      PATH: `${BASE_PATH}/employees/driver-license`,
      ADD: `${BASE_PATH}/employees/driver-license/add`,
      DETAIL: `${BASE_PATH}/employees/driver-license/detail/:id`,
      EDIT: `${BASE_PATH}/employees/driver-license/edit/:id`,
    },
    MIGRATION_INFO: {
      PATH: `${BASE_PATH}/employees/migration-info`,
      ADD: `${BASE_PATH}/employees/migration-info/add`,
      DETAIL: `${BASE_PATH}/employees/migration-info/detail/:id`,
      EDIT: `${BASE_PATH}/employees/migration-info/edit/:id`,
    },
    MEDICAL_INFO: {
      PATH: `${BASE_PATH}/employees/medical-info`,
      ADD: `${BASE_PATH}/employees/medical-info/add`,
      DETAIL: `${BASE_PATH}/employees/medical-info/detail/:id`,
      EDIT: `${BASE_PATH}/employees/medical-info/edit/:id`,
    },
    PREVIOUS_POSITION: {
      PATH: `${BASE_PATH}/employees/previous-position`,
      ADD: `${BASE_PATH}/employees/previous-position/add`,
      DETAIL: `${BASE_PATH}/employees/previous-position/detail/:id`,
      EDIT: `${BASE_PATH}/employees/previous-position/edit/:id`,
    },
    EXPERIENCE: {
      PATH: `${BASE_PATH}/employees/experience`,
      ADD: `${BASE_PATH}/employees/experience/add`,
      DETAIL: `${BASE_PATH}/employees/experience/detail/:id`,
      EDIT: `${BASE_PATH}/employees/experience/edit/:id`,
    },
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
