import { type ReactNode } from 'react';

import { Stack, type SxProps, type Theme } from '@mui/material';

import { PanelBody } from './panelBody';
import { PanelHeader } from './panelHeader';

interface IPanel {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const Panel = ({ sx, children }: IPanel) => (
  <Stack
    py={6}
    px={5}
    alignItems="flex-start"
    justifyContent="flex-start"
    flexDirection="column"
    width="100%"
    sx={[...(Array.isArray(sx) ? sx : [sx])]}
  >
    {children}
  </Stack>
);

Panel.Header = PanelHeader;
Panel.Body = PanelBody;
