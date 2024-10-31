import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const buttonTheme: Components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      disableFocusRipple: true
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
          lineHeight: '18px'
        },

        '&.MuiButton-sizeMedium': {
          height: 40,
          padding: '10px 16px',
          fontSize: '14px',
          lineHeight: '20px'
        },

        '&.MuiButton-sizeLarge': {
          height: 44,
          padding: '10px 16px'
        },

        '& .MuiChip-root': {
          width: 18,
          height: 18,
          borderRadius: '50%',
          marginLeft: 8
        },

        '& .MuiChip-label': {
          padding: 0
        },

        '&:hover': {
          background: colorPalette.primary[500]
        },

        '&:focus': {
          background: colorPalette.primary[700]
        },

        '&:disabled': {
          background: colorPalette.secondary[100]
        }
      },
      outlined: {
        borderColor: colorPalette.primary.main,
        transition: '0.25s',

        '&:hover': {
          borderColor: colorPalette.primary[500],
          color: colorPalette.primary[500],
          background: 'none'
        },

        '&:disabled': {
          borderColor: colorPalette.secondary[200],
          color: colorPalette.secondary[400],
          background: 'none'
        }
      },
      contained: {
        color: colorPalette.common.white
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent',
          color: colorPalette.primary[500]
        }
      }
    }
  }
};
