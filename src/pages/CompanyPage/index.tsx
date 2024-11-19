import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCompanies } from 'src/api/companies';

import { Breadcrumbs, Button, InputAdornment, Link, Stack, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { CustomTablePagination, Panel } from 'src/components';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

import { AddIcon, DownloadIcon, FilterIcon, SearchIcon } from 'src/assets/icons';

const CompanyPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const { data, isLoading } = useGetCompanies(page);

  const handleNavigateAdd = () => {
    navigate(ROUTES.COMPANIES.ADD);
  };

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            fontSize: (theme) => theme.typography.caption,
          }}
        >
          <Link underline="hover" color="inherit" href={ROUTES.DEFAULT.PATH}>
            <Typography variant="caption">Ana səhifə</Typography>
          </Link>
          <Link underline="hover" color="inherit" href={ROUTES.COMPANIES.PATH}>
            <Typography variant="caption" sx={{ color: 'text.primary' }}>
              Şirkətlər
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant="h5" my={3} color="secondary.dark">
          Şirkətlər
        </Typography>
        <Stack justifyContent="space-between" width="100%">
          <Stack gap={4}>
            <TextField
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button variant="outlined">
              <Typography variant="subtitle1" mr={2} fontWeight={600}>
                Filter
              </Typography>
              <FilterIcon />
            </Button>
          </Stack>
          <Stack gap={2}>
            <Button variant="outlined">
              <Typography variant="subtitle1" mr={2} fontWeight={600}>
                Excel-ə çıxart
              </Typography>
              <DownloadIcon />
            </Button>
            <Button
              onClick={handleNavigateAdd}
              sx={{
                '& svg path': {
                  stroke: (theme) => theme.palette.common.white,
                },
              }}
            >
              <Typography variant="subtitle1" mr={2} fontWeight={600}>
                Əlavə et
              </Typography>
              <AddIcon />
            </Button>
          </Stack>
        </Stack>
      </Panel.Header>

      <Panel.Body>
        <Stack width="100%" height="100%">
          <DataGrid columns={tableFields} rows={data?.data} loading={isLoading} />
        </Stack>
        <CustomTablePagination
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          setPageSize={setPageSize}
          total={data?.total}
        />
      </Panel.Body>
    </Panel>
  );
};

export default CompanyPage;
