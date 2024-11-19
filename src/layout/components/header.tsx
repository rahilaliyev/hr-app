import { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from 'src/context/userContext';

import { useGetCompanies } from 'src/api/companies';

import { Avatar, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';

import { StyledHeader } from '../styled';

import { CompanyModal } from './companyModal';

import { ROUTES } from 'src/routes/const';
import { removeAuthCookies } from 'src/utils';

export const Header = () => {
  const navigate = useNavigate();
  const [anchorProfile, setAnchorProfile] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { company } = useContext(UserContext);
  const { data } = useGetCompanies(0);

  const companyName = useMemo(
    () => data?.data?.find((el) => el?.id?.toString() === company)?.name,
    [company, data],
  );

  console.log(data);

  const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorProfile(null);
    removeAuthCookies();
    localStorage.clear();
    navigate(ROUTES.AUTH.LOGIN.PATH);
  };

  const handleOpenCompanyModal = () => {
    setOpen(true);
  };

  return (
    <StyledHeader justifyContent="space-between">
      <CompanyModal open={open} setOpen={setOpen} />
      <Stack>
        <Button sx={{ padding: '0 !important' }} variant="text" onClick={handleOpenCompanyModal}>
          {companyName}
        </Button>
      </Stack>

      <Stack>
        <Button
          sx={{ padding: '0 !important' }}
          variant="text"
          id="profile-button"
          aria-controls={anchorProfile ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorProfile ? 'true' : undefined}
          onClick={handleClickProfile}
        >
          <Avatar />
        </Button>
        <Menu
          id="profile-button"
          disableRestoreFocus={true}
          anchorEl={anchorProfile}
          open={Boolean(anchorProfile)}
          onClose={() => {
            setAnchorProfile(null);
          }}
        >
          <MenuItem onClick={handleCloseProfile}>
            <Typography variant="subtitle1">Logout</Typography>
          </MenuItem>
        </Menu>
      </Stack>
    </StyledHeader>
  );
};
