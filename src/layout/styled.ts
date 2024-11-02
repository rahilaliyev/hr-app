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
