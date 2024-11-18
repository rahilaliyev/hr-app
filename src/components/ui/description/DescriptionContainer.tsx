import { theme } from 'src/theme';

import { ThemeProvider } from '@mui/material';

import { StyledDescriptionContainer } from './Description.styled';
import { type DescriptionContainerProps } from './Description.types';

export const DescriptionContainer = ({ children, sx, fullwidth }: DescriptionContainerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDescriptionContainer sx={sx} fullwidth={fullwidth ?? false}>
        {children}
      </StyledDescriptionContainer>
    </ThemeProvider>
  );
};
