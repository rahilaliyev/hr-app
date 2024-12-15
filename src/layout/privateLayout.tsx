import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import UserContext from 'src/context/userContext';

import { type IAuthToken } from 'src/api/login/types';
import { useGetUserDetails } from 'src/api/users';

import { Box, Stack } from '@mui/material';

import { CompanyModal, Header, Sidebar } from './components';

import { ROUTES } from 'src/routes/const';
import { getAccessToken } from 'src/utils';

const PrivateLayout = () => {
  const token = getAccessToken();

  const { sub } = token ? jwtDecode<IAuthToken>(token) : { sub: null };
  const { data: userDetails, isSuccess } = useGetUserDetails(sub ?? '');
  const { company, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(!company);

  useEffect(() => {
    userDetails && setUser(userDetails);
  }, [isSuccess, setUser, userDetails]);

  if (!token) {
    return <Navigate to={ROUTES.AUTH.LOGIN.PATH} />;
  }

  return (
    <Stack height="100%" alignItems="flex-start">
      <CompanyModal open={open} setOpen={setOpen} disableClose={true} />
      <Sidebar />
      <Box
        height="100%"
        sx={{
          width: (theme) => `calc(100% - ${theme.spacing(60)})`,
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box overflow="auto" height="calc(100vh - 73px)">
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};

export default PrivateLayout;
