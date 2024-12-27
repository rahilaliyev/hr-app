import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import PrivateLayout from 'src/layout/privateLayout';
import PublicLayout from 'src/layout/publicLayout';

import { suspenseFallback } from 'src/components';

import { ROUTES } from './const';

import { EMPLOYEE_PATHS_KEYS } from 'src/constants';

const Login = lazy(() => import('src/pages/LoginPage'));
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'));
const HomePage = lazy(() => import('src/pages/HomePage'));
const CompanyPage = lazy(() => import('src/pages/CompanyPage'));
const CompanyDetailPage = lazy(() => import('src/pages/CompanyPage/CompanyDetailPage'));
const CompanyAddEditPage = lazy(() => import('src/pages/CompanyPage/CompanyAddEditPage'));
const UserPage = lazy(() => import('src/pages/UserPage'));
const UserDetailPage = lazy(() => import('src/pages/UserPage/UserDetailPage'));
const UserAddEditPage = lazy(() => import('src/pages/UserPage/UserAddEditPage'));
const RolePage = lazy(() => import('src/pages/RolePage'));
const RoleAddEditPage = lazy(() => import('src/pages/RolePage/Roles/RoleAddEditPage'));
const RoleDetailPage = lazy(() => import('src/pages/RolePage/Roles/RoleDetailPage'));
const RoleGroupAddEditPage = lazy(() => import('src/pages/RolePage/RoleGroups/RoleGroupsAddEditPage'));
const RoleGroupDetailPage = lazy(() => import('src/pages/RolePage/RoleGroups/RoleGroupsDetailPage'));
const EmployeePage = lazy(() => import('src/pages/EmployeePage'));
const EmployeeInfoPage = lazy(() => import('src/pages/EmployeePage/EmployeeInfo'));
const EmployeeFamilyInfoPage = lazy(() => import('src/pages/EmployeePage/FamilyInfo'));
const EmployeeMilitaryInfoPage = lazy(() => import('src/pages/EmployeePage/MilitaryInfo'));
const EmployeeWorkerContractsPage = lazy(() => import('src/pages/EmployeePage/WorkerContracts'));
const EmployeeWorkPlacesPage = lazy(() => import('src/pages/EmployeePage/WorkPlaces'));
const EmployeeEducationPage = lazy(() => import('src/pages/EmployeePage/Education'));
const EmployeeCertificatesPage = lazy(() => import('src/pages/EmployeePage/Certificates'));
const EmployeeLanguagesPage = lazy(() => import('src/pages/EmployeePage/Languages'));
const EmployeeSkillsPage = lazy(() => import('src/pages/EmployeePage/Skills'));
const EmployeeDriverLicensePage = lazy(() => import('src/pages/EmployeePage/DriverLicense'));
const EmployeeMigrationPage = lazy(() => import('src/pages/EmployeePage/MigrationInfo'));
const EmployeeMedicalPage = lazy(() => import('src/pages/EmployeePage/MedicalInfo'));
const EmployeePrevPositionPage = lazy(() => import('src/pages/EmployeePage/PrevPosition'));
const EmployeeExperiencePage = lazy(() => import('src/pages/EmployeePage/Experience'));

const RouteComponents = () => {
  useEffect(() => {
    const handleOnline = () => {
      enqueueSnackbar({ message: 'İnternet əlaqəsi bərpa oldu', variant: 'success' });
    };

    const handleOffline = () => {
      enqueueSnackbar({ message: 'İnternet əlaqəsi kəsilib', variant: 'error' });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path={ROUTES.DEFAULT.PATH} element={<PrivateLayout />}>
        <Route index element={suspenseFallback(HomePage)} />
        <Route path={ROUTES.COMPANIES.PATH}>
          <Route index element={suspenseFallback(CompanyPage)} />
          <Route path={ROUTES.COMPANIES.ADD} element={suspenseFallback(CompanyAddEditPage)} />
          <Route path={ROUTES.COMPANIES.EDIT} element={suspenseFallback(CompanyAddEditPage)} />
          <Route path={ROUTES.COMPANIES.DETAIL} element={suspenseFallback(CompanyDetailPage)} />
        </Route>
        <Route path={ROUTES.USERS.PATH}>
          <Route index element={suspenseFallback(UserPage)} />
          <Route path={ROUTES.USERS.ADD} element={suspenseFallback(UserAddEditPage)} />
          <Route path={ROUTES.USERS.EDIT} element={suspenseFallback(UserAddEditPage)} />
          <Route path={ROUTES.USERS.DETAIL} element={suspenseFallback(UserDetailPage)} />
        </Route>
        <Route path={ROUTES.ROLES.PATH}>
          <Route index element={suspenseFallback(RolePage)} />
          <Route path={ROUTES.ROLES.ADD} element={suspenseFallback(RoleAddEditPage)} />
          <Route path={ROUTES.ROLES.EDIT} element={suspenseFallback(RoleAddEditPage)} />
          <Route path={ROUTES.ROLES.DETAIL} element={suspenseFallback(RoleDetailPage)} />
        </Route>
        <Route path={ROUTES.ROLE_GROUPS.PATH}>
          <Route index element={suspenseFallback(RolePage)} />
          <Route path={ROUTES.ROLE_GROUPS.ADD} element={suspenseFallback(RoleGroupAddEditPage)} />
          <Route path={ROUTES.ROLE_GROUPS.EDIT} element={suspenseFallback(RoleGroupAddEditPage)} />
          <Route path={ROUTES.ROLE_GROUPS.DETAIL} element={suspenseFallback(RoleGroupDetailPage)} />
        </Route>
        <Route path={ROUTES.EMPLOYEES.PATH} element={suspenseFallback(EmployeePage)}>
          <Route index element={suspenseFallback(EmployeeInfoPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[1].key} element={suspenseFallback(EmployeeFamilyInfoPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[2].key} element={suspenseFallback(EmployeeMilitaryInfoPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[3].key} element={suspenseFallback(EmployeeWorkerContractsPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[4].key} element={suspenseFallback(EmployeeWorkPlacesPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[5].key} element={suspenseFallback(EmployeeEducationPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[6].key} element={suspenseFallback(EmployeeCertificatesPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[7].key} element={suspenseFallback(EmployeeLanguagesPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[8].key} element={suspenseFallback(EmployeeSkillsPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[9].key} element={suspenseFallback(EmployeeDriverLicensePage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[10].key} element={suspenseFallback(EmployeeMigrationPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[11].key} element={suspenseFallback(EmployeeMedicalPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[12].key} element={suspenseFallback(EmployeePrevPositionPage)} />
          <Route path={EMPLOYEE_PATHS_KEYS[13].key} element={suspenseFallback(EmployeeExperiencePage)} />
        </Route>
      </Route>

      <Route path={ROUTES.AUTH.PATH} element={<PublicLayout />}>
        <Route index path={ROUTES.AUTH.LOGIN.PATH} element={suspenseFallback(Login)} />
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD.PATH} element={suspenseFallback(ForgotPassword)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
