import { Suspense } from 'react';

import { CircularProgress, Stack } from '@mui/material';

export const suspenseFallback = (
  WrapperComponent: React.FC,
  fallback = (
    <Stack width="100%" p={5} justifyContent="center">
      <CircularProgress />
    </Stack>
  ),
) => {
  return (
    <Suspense fallback={fallback}>
      <WrapperComponent />
    </Suspense>
  );
};
