import React from 'react';

import { Pagination, type PaginationProps, Stack } from '@mui/material';

interface IProps extends PaginationProps {
  setPage: (value: number) => void;
}

export const PaginationComponent = ({ count, page, setPage }: IProps) => {
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handlePageChange} />
    </Stack>
  );
};
