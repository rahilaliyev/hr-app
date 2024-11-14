import { type ReactNode } from 'react';

import { Stack, type SxProps, type Theme } from '@mui/material';

interface IPanel {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const PanelBody = ({ sx, children }: IPanel) => (
  <Stack mt={5} flexDirection="column" width="100%" sx={[...(Array.isArray(sx) ? sx : [sx])]}>
    {children}
  </Stack>
);