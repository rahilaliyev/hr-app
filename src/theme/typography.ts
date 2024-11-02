import type { Components, Palette } from '@mui/material';
import type { TypographyOptions } from '@mui/material/styles/createTypography';

import { colorPalette } from './colorpalette';

export const typographyOptions: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: 'Manrope',
  h1: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '60px',
    lineHeight: '80px',
    fontWeight: 800,
  },
  h2: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '48px',
    lineHeight: '64px',
    fontWeight: 800,
  },
  h3: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: 800,
  },
  h4: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '30px',
    lineHeight: '40px',
    fontWeight: 800,
  },
  h5: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 800,
  },
  h6: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 800,
  },
  subtitle1: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
  },
  body1: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    lineHeight: '28px',
  },
  body2: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
  },
  caption: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '12px',
    lineHeight: '18px',
  },
};

export const typographyTheme: Components = {
  MuiTypography: {
    defaultProps: {
      variant: 'body2',
      variantMapping: {
        body2: 'p',
        subtitle2: 'p',
      },
    },
    variants: [
      {
        props: { variant: 'subtitle2' },
        style: {
          color: colorPalette.secondary[900],
        },
      },
    ],
  },
};
