import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Button, InputAdornment, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';

import { Breadcrumb, Panel } from 'src/components';

import { EMPLOYEE_PATHS_KEYS } from 'src/constants';
import { ROUTES } from 'src/routes/const';

import { AddIcon, FilterIcon, SearchIcon } from 'src/assets/icons';

const EmployeePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabPaths = useMemo(() => EMPLOYEE_PATHS_KEYS.map((route) => route.path), []);
  const currentTab = tabPaths.indexOf(location.pathname);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(tabPaths[newValue]);
  };

  const handleNavigateAdd = () => {};

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'İşçilər', href: ROUTES.EMPLOYEES.PATH, active: true },
          ]}
        />
        <Typography variant="h5" my={3} color="secondary.dark">
          İşçilər
        </Typography>
        <Stack mb={9} width="100%">
          <Tabs
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab label="İşçilər" />
            <Tab label="Ailə məlumatları" />
            <Tab label="Hərbi məlumatlar" />
            <Tab label="Əmək müqaviləsi şərtləri" />
            <Tab label="İş yeri barədə məlumat" />
            <Tab label="Təhsil məlumatları" />
            <Tab label="Təlim, tədris və sertifikatlar" />
            <Tab label="Dil bilikləri" />
            <Tab label="Bacarıqlar" />
            <Tab label="Sürücülük vəsiqəsi" />
            <Tab label="Miqrasiya məlumatları" />
            <Tab label="Tibbi məlumatlar" />
            <Tab label="Əvvəlki iş yerləri" />
            <Tab label="İş stajı" />
          </Tabs>
        </Stack>
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
        <Outlet />
      </Panel.Body>
    </Panel>
  );
};

export default EmployeePage;
