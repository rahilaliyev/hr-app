import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateLayout from 'src/layout/privateLayout';
import PublicLayout from 'src/layout/publicLayout';

import { suspenseFallback } from 'src/components/ui/suspenseFallback';

import { ROUTES } from './const';

const Login = lazy(() => import('src/pages/LoginPage'));
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'));
const HomePage = lazy(() => import('src/pages/HomePage'));

const RouteComponents = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT.PATH} element={<PrivateLayout />}>
        <Route index element={suspenseFallback(HomePage)} />
      </Route>
      <Route path={ROUTES.AUTH.PATH} element={<PublicLayout />}>
        <Route index path={ROUTES.AUTH.LOGIN.PATH} element={suspenseFallback(Login)} />
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD.PATH} element={suspenseFallback(ForgotPassword)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
