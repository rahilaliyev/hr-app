import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const chipTheme: Components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: colorPalette.grey[300],
        color: colorPalette.grey[700],
      },
      colorSuccess: {
        backgroundColor: colorPalette.success.light,
        color: colorPalette.success.main,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.success.main,
        },
      },
      colorError: {
        backgroundColor: colorPalette.error.dark,
        color: colorPalette.error.dark,
        '& .MuiBox-root': {
          backgroundColor: colorPalette.error.dark,
        },
      },
      colorInfo: {
        color: colorPalette.info.light,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.info.light,
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
