import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const chipTheme: Components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: colorPalette.secondary[300],
        color: colorPalette.secondary[700],
      },
      colorSuccess: {
        backgroundColor: colorPalette.success[100],
        color: colorPalette.success.main,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.success.main,
        },
      },
      colorError: {
        backgroundColor: colorPalette.error[500],
        color: colorPalette.error[500],
        '& .MuiBox-root': {
          backgroundColor: colorPalette.error[500],
        },
      },
      colorInfo: {
        color: colorPalette.info[100],

        '& .MuiBox-root': {
          backgroundColor: colorPalette.info[100],
        },
      },
      sizeSmall: {
        fontSize: '12px',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: 'none',

        '& .MuiChip-label': {
          paddingLeft: 0,
        },
      },
    },
  },
};
