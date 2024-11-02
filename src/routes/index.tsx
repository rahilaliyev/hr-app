import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { suspenseFallback } from 'src/components/ui/suspenseFallback';

import { ROUTES } from './const';

const Login = lazy(() => import('src/pages/LoginPage'));
const Layout = lazy(() => import('src/layout'));
const HomePage = lazy(() => import('src/pages/HomePage'));

const RouteComponents = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT.PATH} element={suspenseFallback(Layout)}>
        <Route index element={suspenseFallback(HomePage)} />
      </Route>
      <Route element={suspenseFallback(Login)} path={ROUTES.LOGIN.PATH} />
    </Routes>
  );
};

export default RouteComponents;
