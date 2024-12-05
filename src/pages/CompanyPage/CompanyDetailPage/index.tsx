import { useNavigate, useParams } from 'react-router-dom';
import { theme } from 'src/theme';

import { useGetCompanyDetails } from 'src/api';

import { IconButton, Stack, Tooltip, Typography } from '@mui/material';

import {
  Breadcrumb,
  Description,
  DescriptionContainer,
  GoBackButton,
  LoaderOverlay,
  Panel,
} from 'src/components';

import { ROUTES } from 'src/routes/const';

import { PencilIcon } from 'src/assets/icons';

const CompanyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetCompanyDetails(id ?? '');

  const handleNavigateEdit = () => {
    navigate(`${ROUTES.COMPANIES.PATH}/edit/${id}`);
  };

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Panel>
        <Panel.Header>
          <Breadcrumb
            items={[
              { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
              { label: 'Şirkətlər', href: ROUTES.COMPANIES.PATH },
              { label: data?.name ?? 'Detail', href: `${ROUTES.COMPANIES.PATH}/detail/${id}`, active: true },
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
          <DescriptionContainer>
            <Description label="Şirkətin adı" content={data?.name} />
            <Description label="VÖEN" content={data?.voen} />
            <Description label="SUN" content={data?.sun} />
            <Description label="Bank adı" content={data?.bank_name} />
            <Description label="Filial" content={data?.bank_filial} />
            <Description label="Bank VÖEN" content={data?.bank_voen} />
            <Description label="Müxbir hesab" content={data?.cor_account} />
            <Description label="AZN Hesab" content={data?.azn_account} />
            <Description label="USD Hesab" content={data?.usd_account} />
            <Description label="EUR Hesab" content={data?.eur_account} />
            <Description label="Ölkə" content={data?.country} />
            <Description label="Şəhər" content={data?.city} />
            <Description label="Poçt indeksi" content={data?.poct_index} />
            <Description label="Telefon" content={data?.tel} />
            <Description label="Rəhbərin S.A.A" content={data?.enterprise_head_fullname} />
            <Description label="Rəhbərin vəzifəsi" content={data?.enterprise_head_position} />
            <Description label="Servis xidməti" content={data?.service_id?.label} />
            <Description label="Kod" content={data?.kod} />
            <Description label="S.W.İ.F.T" content={data?.swift} />
            <Description label="Ünvan" content={data?.address} />
            <Description label="Təsisçi" content={data?.founder} />
          </DescriptionContainer>
        </Panel.Body>
      </Panel>
    </LoaderOverlay>
  );
};

export default CompanyDetail;
