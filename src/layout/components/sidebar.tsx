import { Link, NavLink } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';

import { StyledImageContainer, StyledNavbar, StyledSidebar } from '../styled';

import { useMenuItems } from 'src/hooks';
import { ROUTES } from 'src/routes/const';

import Logo from 'src/assets/images/logoZenHr.png';

export const Sidebar = () => {
  const menuItems = useMenuItems();
  return (
    <StyledSidebar>
      <Stack mb={4}>
        <Link to={ROUTES.DEFAULT.PATH}>
          <StyledImageContainer>
            <Box component="img" src={Logo} alt="Logo" />
          </StyledImageContainer>
        </Link>
      </Stack>

      <StyledNavbar flexDirection="column" alignItems="flex-start">
        {menuItems.map((item, index) => (
          <NavLink key={index} to={item.href}>
            <Typography variant="subtitle1">
              {item.icon} {item.label}
            </Typography>
          </NavLink>
        ))}
      </StyledNavbar>
    </StyledSidebar>
  );
};
