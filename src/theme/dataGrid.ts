import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

import { colorPalette } from './colorpalette';

export const dataGridTheme: DataGridComponents = {
  MuiDataGrid: {
    defaultProps: {
      disableColumnResize: true,
      columnHeaderHeight: 40,
      rowHeight: 40,
      hideFooter: true,
      disableColumnMenu: true,
      disableVirtualization: false,
    },
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: colorPalette.primary[200],
        border: 'none',
      },
      main: {
        width: '100%',
        overflow: 'auto',
      },
      row: {
        borderBottom: `1px solid ${colorPalette.secondary[200]}`,
        '&.Mui-selected': {
          backgroundColor: 'transparent',
        },
      },
      cell: {
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
        borderColor: 'transparent',
        color: colorPalette.common.black,
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        '&:focus': {
          outline: 'none',
        },
        '&:focus-within': {
          outline: 'none',
        },
      },
      columnHeaders: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      },
      columnHeader: {
        height: 'auto !important',
        backgroundColor: colorPalette.primary[200],
        padding: '8px 12px',
        fontSize: '12px',
        lineHeight: '18px',
        color: colorPalette.secondary[800],
        borderBottom: `1px solid ${colorPalette.secondary[200]}`,

        '&:focus-within': {
          outline: 'none',
        },
      },
      columnSeparator: {
        display: 'none',
      },
      overlay: {
        backgroundColor: 'transparent',

        '& .MuiCircularProgress-root': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      virtualScrollerRenderZone: {
        backgroundColor: 'transparent',
        padding: '8px 12px',
      },
      virtualScrollerContent: {
        paddingBottom: '14px',
      },
    },
  },
};
