import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const textFieldTheme: Components = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        width: '100%',

        '&.Mui-disabled': {
          backgroundColor: '#eee'
        },

        '& legend': {
          width: '0'
        }
      },
      input: {
        padding: '4px 12px !important',
        height: '36px'
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      InputLabelProps: {
        shrink: false
      }
    },
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        '& fieldset': {
          borderColor: colorPalette.secondary.main
        }
      }
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        marginTop: '0 !important',
        '& .MuiTypography-root': {
          color: `${colorPalette.common.black} !important`
        }
      }
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: colorPalette.secondary[200],
        borderRadius: 4
      }
    }
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        width: '100%'
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        marginBottom: '6px',
        position: 'unset',
        transform: 'none',
        color: colorPalette.common.black,
        overflow: 'unset',
        whiteSpace: 'wrap',
        textAlign: 'left'
      },
      filled: {
        transform: 'translate(12px, 12px) scale(1)'
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontFamily: 'Manrope, sans-serif'
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        '&::before': {
          border: 'none'
        }
      },
      input: {
        padding: 0
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
};
