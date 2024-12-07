import { type Components } from '@mui/material/styles';

import { colorPalette } from './colorpalette';

export const tablePaginationTheme: Components = {
  MuiTablePagination: {
    styleOverrides: {
      root: {
        width: '100%',
      },
      selectRoot: {
        width: 'unset',
      },
      toolbar: {
        alignItems: 'center',
        '& .MuiButtonBase-root': {
          borderColor: colorPalette.grey[200],
          color: colorPalette.secondary.dark,
          borderRadius: 8,
        },
        '& .MuiInputBase-root ': {
          border: `1px solid ${colorPalette.secondary.light}`,
          padding: '9px 12px',
          fontSize: '12px',
          lineHeight: '18px',
          '& .MuiSelect-icon': {
            top: 'calc(45% - .5em)',
            right: '5px',
          },
        },
      },
      spacer: {
        display: 'none',
      },
      displayedRows: {
        display: 'none',
      },
      selectLabel: {
        color: colorPalette.grey[500],
      },
    },
  },
};
