import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

export const suspenseFallback = (WrapperComponent: React.FC, fallback = <CircularProgress />) => {
  return (
    <Suspense fallback={fallback}>
      <WrapperComponent />
    </Suspense>
  );
};
