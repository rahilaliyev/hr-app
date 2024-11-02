import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const datepickerTheme: Components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        '& .MuiPickersLayout-contentWrapper *': {
          fontFamily: 'Manrope, sans-serif',
        },
        '& .MuiPickersYear-yearButton.Mui-selected, & .MuiPickersDay-root.Mui-selected': {
          color: colorPalette.common.white,
        },
        '& .MuiDayCalendar-weekDayLabel': {
          color: colorPalette.common.black,
        },
      },
    },
  },
};
