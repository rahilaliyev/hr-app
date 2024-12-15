import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

import { colorPalette } from './colorpalette';

export const dataGridTheme: DataGridComponents = {
  MuiDataGrid: {
    defaultProps: {
      disableColumnResize: true,
      hideFooter: true,
      columnHeaderHeight: 40,
      rowHeight: 50,
      disableColumnMenu: true,
      disableVirtualization: false,
    },
    styleOverrides: {
      root: {
        fontFamily: 'Manrope, sans-serif',
        border: `1px solid ${colorPalette.grey[200]}`,
        borderRadius: '8px',
        '--DataGrid-scrollbarSize': '10px',
      },
      main: {
        width: '100%',
        overflow: 'auto',
      },
      row: {
        borderBottom: `1px solid ${colorPalette.grey[200]}`,
        '&.Mui-selected': {
          backgroundColor: 'transparent',
        },
      },
      cell: {
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '20px',
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
        backgroundColor: colorPalette.grey[50],
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '20px',
        color: colorPalette.secondary.dark,
        borderBottom: `1px solid ${colorPalette.grey[200]}`,

        '&:focus-within': {
          outline: 'none',
        },
      },
      columnHeaderTitle: {
        fontWeight: 600,
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
      },
      virtualScrollerContent: {
        paddingBottom: '14px',
      },
    },
  },
};
