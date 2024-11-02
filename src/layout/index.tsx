import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from 'src/routes/const';
import { getAccessToken } from 'src/utils';

const Layout = () => {
  const token = getAccessToken();
  return token ? (
    <div>
      Sidebar <Outlet />
    </div>
  ) : (
    <Navigate to={ROUTES.LOGIN.PATH} />
  );
};

export default Layout;
