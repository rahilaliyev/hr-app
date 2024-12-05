import { useNavigate } from 'react-router-dom';

import { useGetUsers } from 'src/api';

import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Breadcrumb, Panel } from 'src/components';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

import { AddIcon, FilterIcon, SearchIcon } from 'src/assets/icons';

const UserPage = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetUsers();

  const handleNavigateAdd = () => {
    navigate(ROUTES.USERS.ADD);
  };

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'İstifadəçilər', href: ROUTES.USERS.PATH, active: true },
          ]}
        />
        <Typography variant="h5" my={3} color="secondary.dark">
          İstifadəçilər
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
          <DataGrid getRowHeight={() => 'auto'} columns={tableFields} rows={data} loading={isLoading} />
        </Stack>
      </Panel.Body>
    </Panel>
  );
};

export default UserPage;
