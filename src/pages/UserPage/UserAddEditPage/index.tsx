import { useParams } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { Breadcrumb, GoBackButton, Panel } from 'src/components';

import FormContainer from './components/formContainer';

import { ROUTES } from 'src/routes/const';

const UserAddEditPage = () => {
  const { id } = useParams();

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'İstifadəçilər', href: ROUTES.USERS.PATH },
            {
              label: !id ? 'Yeni istifadəçi' : 'Düzəliş et',
              href: id ? `${ROUTES.USERS.PATH}/edit/${id}` : ROUTES.USERS.ADD,
              active: true,
            },
          ]}
        />
        <Stack gap={2}>
          <GoBackButton />
          <Typography variant="h5" my={3} color="secondary.dark">
            {!id ? 'İstifadəçi yarat' : 'Düzəliş et'}
          </Typography>
        </Stack>
      </Panel.Header>
      <Panel.Body>
        <FormContainer />
      </Panel.Body>
    </Panel>
  );
};

export default UserAddEditPage;
