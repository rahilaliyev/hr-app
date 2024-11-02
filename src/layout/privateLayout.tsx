import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from 'src/routes/const';
import { getAccessToken } from 'src/utils';

const PrivateLayout = () => {
  const token = getAccessToken();
  return token ? (
    <div>
      Sidebar <Outlet />
    </div>
  ) : (
    <Navigate to={ROUTES.AUTH.LOGIN.PATH} />
  );
};

export default PrivateLayout;
