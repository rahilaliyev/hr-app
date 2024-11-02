import { Navigate, Outlet } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { StyledFormContainer, StyledImageContainer, StyledPublicLayout } from './styled';

import { ROUTES } from 'src/routes/const';
import { getAccessToken } from 'src/utils';

import Logo from 'src/assets/images/logo.png';

const PublicLayout = () => {
  const token = getAccessToken();
  return !token ? (
    <StyledPublicLayout>
      <Grid container spacing={2} height="100%">
        <Grid size={6}>
          <Stack flexDirection="column" justifyContent="center" alignItems="center" height="100%">
            <StyledImageContainer>
              <img src={Logo} alt="Logo" />
            </StyledImageContainer>
            <Typography variant="body1" sx={{ color: (theme) => theme.palette.common.white }}>
              Dünyanın işini avtomatlaşdırırıq
            </Typography>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Box p={10} height="100%">
            <StyledFormContainer justifyContent="center" alignItems="center">
              <Outlet />
            </StyledFormContainer>
          </Box>
        </Grid>
      </Grid>
    </StyledPublicLayout>
  ) : (
    <Navigate to={ROUTES.DEFAULT.PATH} />
  );
};

export default PublicLayout;
