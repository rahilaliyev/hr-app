import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { suspenseFallback } from 'src/components/ui/suspenseFallback';

import { ROUTES } from './const';

const PrivateLayout = lazy(() => import('src/layout/privateLayout'));
const PublicLayout = lazy(() => import('src/layout/publicLayout'));
const Login = lazy(() => import('src/pages/LoginPage'));
const ForgotPassword = lazy(() => import('src/pages/ForgotPasswordPage'));
const HomePage = lazy(() => import('src/pages/HomePage'));

const RouteComponents = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT.PATH} element={suspenseFallback(PrivateLayout)}>
        <Route index element={suspenseFallback(HomePage)} />
      </Route>
      <Route path={ROUTES.AUTH.PATH} element={suspenseFallback(PublicLayout)}>
        <Route index path={ROUTES.AUTH.LOGIN.PATH} element={suspenseFallback(Login)} />
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD.PATH} element={suspenseFallback(ForgotPassword)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
