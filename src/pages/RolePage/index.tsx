import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, InputAdornment, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';

import { Breadcrumb, Panel } from 'src/components';

import RoleGroups from './RoleGroups';
import Roles from './Roles';

import { ROUTES } from 'src/routes/const';

import { AddIcon, FilterIcon, SearchIcon } from 'src/assets/icons';

const RolePage = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNavigateAdd = () => {
    value === 0 ? navigate(ROUTES.ROLES.ADD) : navigate(ROUTES.ROLES.ADD);
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
          <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="Rollar" value={0} />
            <Tab label="Rol qruplar" value={1} />
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
        {value === 0 && <Roles />}
        {value === 1 && <RoleGroups />}
      </Panel.Body>
    </Panel>
  );
};

export default RolePage;
