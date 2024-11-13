import { Box, Stack, styled } from '@mui/material';

import BgImage from 'src/assets/images/loginImage.jpg';

export const StyledPublicLayout = styled(Box)(() => ({
  backgroundImage: `url(${BgImage})`,
  height: '100%',
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(55),
  '& img': {
    width: '100%',
  },
}));

export const StyledFormContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(20),
  height: '100%',
}));

export const StyledSidebar = styled(Box)(({ theme }) => ({
  width: theme.spacing(60),
  height: '100%',
  borderRight: `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
  padding: theme.spacing(4),
}));

export const StyledHeader = styled(Stack)(({ theme }) => ({
  borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
  width: '100%',
  padding: theme.spacing(4, 6),
}));

export const StyledNavbar = styled(Stack)(({ theme }) => ({
  '& a': {
    padding: theme.spacing(3),
    width: '100%',
    color: theme.palette.grey[500],
    '& .MuiTypography-root': {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 400,
    },
    '& svg': {
      marginRight: theme.spacing(3),
    },
    '&.active': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      '& svg, & svg path': {
        fill: theme.palette.primary.main,
      },
      '& .MuiTypography-root': {
        fontWeight: 600,
      },
    },
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
}));
