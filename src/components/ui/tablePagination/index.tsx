import { type ChangeEvent, type MouseEvent } from 'react';

import { Box, Button, Stack, TablePagination, Typography } from '@mui/material';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'src/assets/icons';

interface ITablePaginationProps {
  page: number;
  setPage: (value: number) => void;
  pageSize: number;
  setPageSize: (value: number) => void;
  total: number | undefined;
}

interface ITableActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export const CustomTablePagination = (props: ITablePaginationProps) => {
  const { page, pageSize, total, setPage, setPageSize } = props;
  const handlePageSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <Stack width="100%" mt={2.5}>
      <TablePagination
        component={Box}
        count={total ?? 0}
        page={page}
        showFirstButton
        showLastButton
        rowsPerPage={pageSize}
        rowsPerPageOptions={[5, 10, 15]}
        onRowsPerPageChange={handlePageSizeChange}
        onPageChange={(_, page: number) => {
          setPage(page);
        }}
        ActionsComponent={TableActions}
        labelRowsPerPage={<Typography variant="caption">Sətir sayı</Typography>}
        slotProps={{
          select: {
            IconComponent: (props) => <ChevronDownIcon width={18} height={18} {...props} />,
          },
        }}
      />
    </Stack>
  );
};

const TableActions = (props: ITableActionsProps) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const totalPages = Math.ceil(count / rowsPerPage);

  const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const handlePageNumberClick = (event: React.MouseEvent<HTMLButtonElement>, pageNumber: number) => {
    onPageChange(event, pageNumber);
  };

  return (
    <Stack ml="auto" alignItems="center" gap={2}>
      <Button
        sx={{ padding: (theme) => `${theme.spacing(2.25, 4)} !important` }}
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        variant={page === 0 ? 'contained' : 'outlined'}
      >
        <ChevronDoubleLeftIcon />
        <Box component="span" ml={2}>
          Birinci
        </Box>
      </Button>
      <Button
        sx={{ padding: (theme) => `${theme.spacing(2.25, 4)} !important` }}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        variant={page === 0 ? 'contained' : 'outlined'}
      >
        <ChevronLeftIcon />
        <Box component="span" ml={2}>
          Əvvəlki
        </Box>
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          variant={index === page ? 'outlined' : 'text'}
          onClick={(event) => {
            handlePageNumberClick(event, index);
          }}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        sx={{ padding: (theme) => `${theme.spacing(2.25, 4)} !important` }}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        variant={page >= Math.ceil(count / rowsPerPage) - 1 ? 'contained' : 'outlined'}
      >
        <Box component="span" mr={2}>
          Sonrakı
        </Box>
        <ChevronRightIcon />
      </Button>
      <Button
        sx={{ padding: (theme) => `${theme.spacing(2.25, 4)} !important` }}
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        variant={page >= Math.ceil(count / rowsPerPage) - 1 ? 'contained' : 'outlined'}
      >
        <Box component="span" mr={2}>
          Sonuncu
        </Box>
        <ChevronDoubleRightIcon />
      </Button>
    </Stack>
  );
};
