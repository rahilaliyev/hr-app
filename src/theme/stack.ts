import type { Components } from '@mui/material';

export const stackTheme: Components = {
  MuiStack: {
    defaultProps: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
      },
    },
  },
};
