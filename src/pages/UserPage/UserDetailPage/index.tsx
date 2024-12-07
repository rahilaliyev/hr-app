import { useNavigate, useParams } from 'react-router-dom';
import { theme } from 'src/theme';

import { useGetUserDetails } from 'src/api';

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

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetUserDetails(id ?? '');

  const handleNavigateEdit = () => {
    navigate(`${ROUTES.USERS.PATH}/edit/${id}`);
  };

  const name =
    (data?.firstname ?? data?.lastname)
      ? `${data?.firstname} ${data?.lastname}`
      : `${data?.employee?.firstname} ${data?.employee?.lastname}`;

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Panel>
        <Panel.Header>
          <Breadcrumb
            items={[
              { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
              { label: 'İstifadəçilər', href: ROUTES.USERS.PATH },
              {
                label: name,
                href: `${ROUTES.USERS.PATH}/detail/${id}`,
                active: true,
              },
            ]}
          />
          <Stack gap={2}>
            <GoBackButton />
            <Typography variant="h5" my={3} color="secondary.dark">
              {name}
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
            <Description label="İstifadəçi adı" content={data?.username} />
            <Description label="İşçi" content={name} />
            <Description
              label="Rol qruplar"
              content={data?.roleGroups?.map((role) => role?.name).join(', ')}
            />
            <Description label="Proqramın dili" content="AZ" />
            <Description
              label="İş yeri"
              content={data?.companies?.map((company) => company?.name).join(', ')}
            />
          </DescriptionContainer>
        </Panel.Body>
      </Panel>
    </LoaderOverlay>
  );
};

export default UserDetailPage;
