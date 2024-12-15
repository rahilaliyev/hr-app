import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from 'src/theme';

import { useGetModelInfos, useGetRoleDetails } from 'src/api';

import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Breadcrumb, GoBackButton, LoaderOverlay, Panel } from 'src/components';

import { permissionFields } from './fields';

import { ROUTES } from 'src/routes/const';

import { PencilIcon, TickCircleIcon } from 'src/assets/icons';

const RoleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetRoleDetails(id ?? '');
  const { data: modelInfos, isLoading: isModelInfoData } = useGetModelInfos();

  const getHasRoleOrNot = useCallback(
    (id: number) => {
      const dataPermissions = data?.permissions.flatMap((el) => el.id);
      if (dataPermissions && dataPermissions.includes(id)) {
        return <TickCircleIcon pathFill={theme.palette.success.main} />;
      } else {
        return '-';
      }
    },
    [data?.permissions],
  );

  const fields = permissionFields(getHasRoleOrNot);

  const handleNavigateEdit = () => {
    navigate(`${ROUTES.ROLES.PATH}/edit/${id}`);
  };

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Panel>
        <Panel.Header>
          <Breadcrumb
            items={[
              { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
              { label: 'Rollar', href: ROUTES.ROLES.PATH },
              { label: data?.name ?? 'Detail', href: `${ROUTES.ROLES.PATH}/detail/${id}`, active: true },
            ]}
          />
          <Stack gap={2}>
            <GoBackButton />
            <Typography variant="h5" my={3} color="secondary.dark">
              {data?.name}
            </Typography>
            <Tooltip title="Düzəliş et">
              <IconButton onClick={handleNavigateEdit} sx={{ marginLeft: '6px' }}>
                <PencilIcon pathFill={theme.palette.primary.main} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Panel.Header>
        <Panel.Body>
          <Stack width="100%" height="100%">
            <DataGrid columns={fields} rows={modelInfos} loading={isModelInfoData} />
          </Stack>
        </Panel.Body>
      </Panel>
    </LoaderOverlay>
  );
};

export default RoleDetailPage;
