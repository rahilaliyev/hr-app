import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const textFieldTheme: Components = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        width: '100%',
        borderRadius: '8px !important',
        transition: '0.3s',
        color: colorPalette.secondary.dark,

        '&.Mui-disabled': {
          backgroundColor: colorPalette.secondary.light,
        },

        '& legend': {
          width: '0',
        },
      },
      input: {
        padding: '10px 12px !important',
        height: '20px',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      InputLabelProps: {
        shrink: false,
      },
    },
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        '& fieldset': {
          borderColor: colorPalette.secondary.light,
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        marginTop: '0 !important',
        '& .MuiTypography-root': {
          color: `${colorPalette.common.black} !important`,
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: colorPalette.grey[200],
        borderRadius: 4,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        width: '100%',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        marginBottom: '8px',
        position: 'unset',
        transform: 'none',
        color: colorPalette.secondary.dark,
        overflow: 'unset',
        whiteSpace: 'wrap',
        textAlign: 'left',
      },
      filled: {
        transform: 'translate(12px, 12px) scale(1)',
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontFamily: 'Manrope, sans-serif',
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        '&::before': {
          border: 'none',
        },
      },
      input: {
        padding: 0,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',

        '& fieldset': {
          borderColor: colorPalette.grey[200],
          transition: 'border-color 0.3s ease',
        },
        '&:hover fieldset': {
          borderColor: `${colorPalette.primary.main} !important`,
        },
        '&.Mui-focused fieldset': {
          borderColor: colorPalette.primary.main,
          boxShadow: `0 0 4px ${colorPalette.primary.light}`,
        },
      },
    },
  },
};
