import { type ReactNode } from 'react';

import { Stack, type SxProps, type Theme } from '@mui/material';

interface IPanel {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const PanelHeader = ({ sx, children }: IPanel) => (
  <Stack
    justifyContent="flex-start"
    alignItems="flex-start"
    flexDirection="column"
    width="100%"
    sx={[...(Array.isArray(sx) ? sx : [sx])]}
  >
    {children}
  </Stack>
);
