import { type ReactNode } from 'react';

import { type SxProps, type Theme } from '@mui/material';

export interface IDescriptionProps {
  label: string | ReactNode;
  orientation?: 'horziontal' | 'vertical';
  content: string | ReactNode;
}

export interface DescriptionContainerProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  fullwidth?: boolean;
}
