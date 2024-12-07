import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateLayout from 'src/layout/privateLayout';
import PublicLayout from 'src/layout/publicLayout';

import { suspenseFallback } from 'src/components';

import { ROUTES } from './const';

const Login = lazy(() => import('src/pages/LoginPage'));
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'));
const HomePage = lazy(() => import('src/pages/HomePage'));
const CompanyPage = lazy(() => import('src/pages/CompanyPage'));
const CompanyDetailPage = lazy(() => import('src/pages/CompanyPage/CompanyDetailPage'));
const CompanyEditPage = lazy(() => import('src/pages/CompanyPage/CompanyAddEditPage'));
const CompanyAddPage = lazy(() => import('src/pages/CompanyPage/CompanyAddEditPage'));
const UserPage = lazy(() => import('src/pages/UserPage'));
const UserDetailPage = lazy(() => import('src/pages/UserPage/UserDetailPage'));
const UserEditPage = lazy(() => import('src/pages/UserPage/UserAddEditPage'));
const UserAddPage = lazy(() => import('src/pages/UserPage/UserAddEditPage'));
const EmployeePage = lazy(() => import('src/pages/EmployeePage'));

const RouteComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path={ROUTES.DEFAULT.PATH} element={<PrivateLayout />}>
        <Route index element={suspenseFallback(HomePage)} />
        <Route path={ROUTES.COMPANIES.PATH}>
          <Route index element={suspenseFallback(CompanyPage)} />
          <Route path={ROUTES.COMPANIES.ADD} element={suspenseFallback(CompanyAddPage)} />
          <Route path={ROUTES.COMPANIES.EDIT} element={suspenseFallback(CompanyEditPage)} />
          <Route path={ROUTES.COMPANIES.DETAIL} element={suspenseFallback(CompanyDetailPage)} />
        </Route>
        <Route path={ROUTES.USERS.PATH}>
          <Route index element={suspenseFallback(UserPage)} />
          <Route path={ROUTES.USERS.ADD} element={suspenseFallback(UserAddPage)} />
          <Route path={ROUTES.USERS.EDIT} element={suspenseFallback(UserEditPage)} />
          <Route path={ROUTES.USERS.DETAIL} element={suspenseFallback(UserDetailPage)} />
        </Route>
        <Route path={ROUTES.EMPLOYEES.PATH} element={suspenseFallback(EmployeePage)} />
      </Route>
      <Route path={ROUTES.AUTH.PATH} element={<PublicLayout />}>
        <Route index path={ROUTES.AUTH.LOGIN.PATH} element={suspenseFallback(Login)} />
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD.PATH} element={suspenseFallback(ForgotPassword)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
