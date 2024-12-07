import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const chipTheme: Components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: colorPalette.grey[300],
        color: colorPalette.grey[700],
        borderRadius: '8px',
      },
      colorDefault: {
        backgroundColor: colorPalette.primary.light,
        color: colorPalette.primary.main,
        border: `1px solid ${colorPalette.orange[300]}`,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.primary.main,
        },
      },
      colorSuccess: {
        backgroundColor: colorPalette.success.light,
        color: colorPalette.success.main,
        border: `1px solid ${colorPalette.green[300]}`,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.success.main,
        },
      },
      colorError: {
        backgroundColor: colorPalette.error.light,
        color: colorPalette.error.main,
        border: `1px solid ${colorPalette.red[300]}`,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.error.main,
        },
      },
      colorInfo: {
        backgroundColor: colorPalette.info.light,
        color: colorPalette.info.main,
        border: `1px solid ${colorPalette.blue[300]}`,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.info.main,
        },
      },
      colorWarning: {
        backgroundColor: colorPalette.warning.light,
        color: colorPalette.warning.main,
        border: `1px solid ${colorPalette.yellow[300]}`,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.warning.main,
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
