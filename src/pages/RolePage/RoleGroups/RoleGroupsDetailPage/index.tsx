import { Link, useNavigate, useParams } from 'react-router-dom';
import { theme } from 'src/theme';

import { useGetRoleGroupDetails } from 'src/api';

import { Chip, IconButton, Stack, Tooltip, Typography } from '@mui/material';

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

const RoleGroupsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetRoleGroupDetails(id ?? '');

  const handleNavigateEdit = () => {
    navigate(`${ROUTES.ROLE_GROUPS.PATH}/edit/${id}`);
  };

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Panel>
        <Panel.Header>
          <Breadcrumb
            items={[
              { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
              { label: 'Şirkətlər', href: ROUTES.ROLE_GROUPS.PATH },
              {
                label: data?.name ?? 'Detail',
                href: `${ROUTES.ROLE_GROUPS.PATH}/detail/${id}`,
                active: true,
              },
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
            <Description label="Ad" content={data?.name} />
            <Description label="Şirkət" content={data?.company_id} />
            <Description
              label="Rollar"
              content={
                <Stack gap={3}>
                  {data?.roles?.map((el) => (
                    <Link key={el?.id} to={`${ROUTES.ROLES.PATH}/detail/${el?.id}`}>
                      <Chip size="small" label={el?.name} />
                    </Link>
                  ))}
                </Stack>
              }
            />
          </DescriptionContainer>
        </Panel.Body>
      </Panel>
    </LoaderOverlay>
  );
};

export default RoleGroupsDetailPage;
