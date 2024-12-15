import { useParams } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { Breadcrumb, GoBackButton, Panel } from 'src/components';

import FormContainer from './components/formContainer';

import { ROUTES } from 'src/routes/const';

const RoleGroupsAddEditPage = () => {
  const { id } = useParams();

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'Rollar', href: ROUTES.ROLE_GROUPS.PATH },
            {
              label: !id ? 'Yeni rol qrup' : 'Düzəliş et',
              href: id ? `${ROUTES.ROLE_GROUPS.PATH}/edit/${id}` : ROUTES.ROLE_GROUPS.ADD,
              active: true,
            },
          ]}
        />
        <Stack gap={2}>
          <GoBackButton />
          <Typography variant="h5" my={3} color="secondary.dark">
            {!id ? 'Rol qrup əlavə et' : 'Düzəliş et'}
          </Typography>
        </Stack>
      </Panel.Header>
      <Panel.Body>
        <FormContainer />
      </Panel.Body>
    </Panel>
  );
};

export default RoleGroupsAddEditPage;
