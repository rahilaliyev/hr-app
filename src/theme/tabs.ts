import { type Components } from '@mui/material/styles';

import { colorPalette } from './colorpalette';

export const tabsTheme: Components = {
  MuiTabs: {
    styleOverrides: {
      root: {
        width: '100%',
        minHeight: '44px',
        borderBottom: `1px solid ${colorPalette.grey[200]}`,
        '& .MuiTabs-indicator': {
          backgroundColor: colorPalette.primary.main,
        },
      },
      scrollButtons: {
        color: colorPalette.grey[500],
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        padding: '12px 0',
        fontSize: '14px',
        lineHeight: '20px',
        minHeight: '44px',
        minWidth: 'unset',
        maxWidth: 'unset',
        color: colorPalette.grey[500],
        '&.Mui-selected': {
          color: colorPalette.primary.main,
          fontWeight: 600,
        },
        '&:not(:last-child)': {
          marginRight: '20px',
        },
      },
    },
  },
};
