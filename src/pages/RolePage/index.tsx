import { useLocation, useNavigate } from 'react-router-dom';

import { Button, InputAdornment, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';

import { Breadcrumb, Panel } from 'src/components';

import RoleGroups from './RoleGroups';
import Roles from './Roles';

import { ROUTES } from 'src/routes/const';

import { AddIcon, FilterIcon, SearchIcon } from 'src/assets/icons';

const RolePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabPaths = [ROUTES.ROLES.PATH, ROUTES.ROLE_GROUPS.PATH];
  const currentTab = tabPaths.indexOf(location.pathname);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(tabPaths[newValue]);
  };

  const handleNavigateAdd = () => {
    navigate(currentTab === 0 ? ROUTES.ROLES.ADD : ROUTES.ROLE_GROUPS.ADD);
  };

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'Rollar və rol qruplar', href: ROUTES.ROLES.PATH, active: true },
          ]}
        />
        <Typography variant="h5" my={3} color="secondary.dark">
          Rollar və rol qruplar
        </Typography>
        <Stack mb={9} width="100%">
          <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="Rollar" />
            <Tab label="Rol qruplar" />
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
        {currentTab === 0 && <Roles />}
        {currentTab === 1 && <RoleGroups />}
      </Panel.Body>
    </Panel>
  );
};

export default RolePage;
