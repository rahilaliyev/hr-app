import type { Components } from '@mui/material';

export const listTheme: Components = {
  MuiList: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        padding: 0,
        margin: 0,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        padding: 0,
        margin: '0 !important',
      },
    },
  },
};
