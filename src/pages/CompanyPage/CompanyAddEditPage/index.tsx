import { useParams } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { Breadcrumb, GoBackButton, Panel } from 'src/components';

import FormContainer from './components/formContainer';

import { ROUTES } from 'src/routes/const';

const CompanyAddEditPage = () => {
  const { id } = useParams();
  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'Şirkətlər', href: ROUTES.COMPANIES.PATH },
            {
              label: !id ? 'Yeni şirkət' : 'Düzəliş et',
              href: id ? `${ROUTES.COMPANIES.PATH}/edit/${id}` : ROUTES.COMPANIES.ADD,
              active: true,
            },
          ]}
        />
        <Stack gap={2}>
          <GoBackButton />
          <Typography variant="h5" my={3} color="secondary.dark">
            {!id ? 'Şirkət əlavə et' : 'Düzəliş et'}
          </Typography>
        </Stack>
      </Panel.Header>
      <Panel.Body>
        <FormContainer />
      </Panel.Body>
    </Panel>
  );
};

export default CompanyAddEditPage;
