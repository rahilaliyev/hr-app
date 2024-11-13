import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import UserContext from 'src/context/userContext';

import { useGetUserDetailsById } from 'src/api/login';
import { type IAuthToken } from 'src/api/login/types';

import { Stack } from '@mui/material';

import { CompanyModal, Header, Sidebar } from './components';

import { ROUTES } from 'src/routes/const';
import { getAccessToken } from 'src/utils';

const PrivateLayout = () => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.AUTH.LOGIN.PATH} />;
  }

  const { sub } = jwtDecode<IAuthToken>(token);
  const { data: userDetails, isSuccess } = useGetUserDetailsById(sub);
  const { company, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(!company);

  useEffect(() => {
    userDetails && setUser(userDetails);
  }, [isSuccess]);

  return (
    <Stack height="100%" alignItems="flex-start">
      <CompanyModal open={open} setOpen={setOpen} disableClose={true} />
      <Sidebar />
      <Stack
        flexDirection="column"
        height="100%"
        sx={{
          width: (theme) => `calc(100% - ${theme.spacing(60)})`,
        }}
      >
        <Header />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
