import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from 'src/context/userContext';

import { Stack } from '@mui/material';

import { CompanyModal, Header, Sidebar } from './components';

const PrivateLayout = () => {
  const { company } = useContext(UserContext);
  const [open, setOpen] = useState(!company);

  return (
    <Stack height="100%" alignItems="flex-start">
      <CompanyModal open={open} setOpen={setOpen} disableClose={true} />
      <Sidebar />
      <Stack
        flexDirection="column"
        height="100%"
        sx={{
          width: (theme) => `calc(100% - ${theme.spacing(2)})`,
        }}
      >
        <Header />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
