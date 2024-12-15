import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const buttonTheme: Components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      disableFocusRipple: true,
    },
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        borderRadius: 8,
        textTransform: 'unset',
        minWidth: 'auto',
        whiteSpace: 'nowrap',

        '&.MuiButton-sizeSmall': {
          height: 36,
          padding: '9px 16px',
          fontSize: '12px',
          lineHeight: '18px',
        },

        '&.MuiButton-sizeMedium': {
          height: 40,
          padding: '10px 16px',
          fontSize: '14px',
          lineHeight: '20px',
        },

        '&.MuiButton-sizeLarge': {
          height: 44,
          padding: '10px 16px',
        },

        '& .MuiChip-root': {
          width: 18,
          height: 18,
          borderRadius: '50%',
          marginLeft: 8,
        },

        '& .MuiChip-label': {
          padding: 0,
        },

        '&:hover': {
          background: colorPalette.orange[500],
        },

        '&:focus': {
          borderColor: colorPalette.primary.light,
        },

        '&:disabled': {
          background: colorPalette.grey[100],
        },
      },
      outlined: {
        borderColor: colorPalette.primary.main,
        transition: '0.25s',

        '&:hover': {
          borderColor: colorPalette.orange[500],
          color: colorPalette.orange[500],
          background: 'none',
        },

        '&:disabled': {
          borderColor: colorPalette.grey[200],
          color: colorPalette.grey[400],
          background: 'none',
        },
      },
      contained: {
        color: colorPalette.common.white,
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent',
          color: colorPalette.orange[500],
        },
      },
    },
  },
};
