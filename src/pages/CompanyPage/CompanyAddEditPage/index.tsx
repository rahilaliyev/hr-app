import { useParams } from 'react-router-dom';

import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';

import { GoBackButton, Panel } from 'src/components';

import FormContainer from './components/formContainer';

import { ROUTES } from 'src/routes/const';

const CompanyAddEditPage = () => {
  const { id } = useParams();
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
            <Typography variant="caption">Şirkətlər</Typography>
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href={id ? `${ROUTES.COMPANIES.PATH}/edit/${id}` : ROUTES.COMPANIES.ADD}
          >
            <Typography variant="caption" sx={{ color: 'text.primary' }}>
              {!id ? 'Yeni şirkət' : 'Düzəliş et'}
            </Typography>
          </Link>
        </Breadcrumbs>
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
