import { colorPalette } from 'src/theme/colorpalette';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDescriptionContainer = styled('table', {
  shouldForwardProp: (prop) => prop !== 'fullwidth',
})<{ fullwidth: boolean }>(({ theme, fullwidth }) => ({
  width: fullwidth ? '100%' : 'max-content',
  borderRadius: theme.spacing(2),
  '& td': {
    padding: theme.spacing(1),
  },
  '& tr td:first-of-type': {
    paddingRight: theme.spacing(10),
  },
  '& tr td:last-of-type': {
    textAlign: fullwidth ? 'right' : 'left',
  },
}));

export const StyledLabelBox = styled(Box)(({ theme }) => ({
  fontSize: theme.spacing(3.5),
  lineHeight: theme.spacing(5),
  color: colorPalette.grey[500],
}));

export const StyledContentBox = styled(Box)(({ theme }) => ({
  fontSize: theme.spacing(3.5),
  lineHeight: theme.spacing(5),
  fontWeight: 600,
  color: colorPalette.secondary.dark,
}));
