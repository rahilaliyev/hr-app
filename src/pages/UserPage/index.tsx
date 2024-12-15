import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteUser, useGetUsers } from 'src/api';

import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Breadcrumb, ConfirmModal, Panel } from 'src/components';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

import { AddIcon, FilterIcon, SearchIcon } from 'src/assets/icons';

const UserPage = () => {
  const navigate = useNavigate();

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data, isLoading } = useGetUsers();
  const { mutate, isPending } = useDeleteUser();

  const handleNavigateAdd = () => {
    navigate(ROUTES.USERS.ADD);
  };

  const handleNavigateDetail = (id: number) => {
    navigate(`${ROUTES.USERS.PATH}/detail/${id}`);
  };

  const handleNavigateEdit = (id: number) => {
    navigate(`${ROUTES.USERS.PATH}/edit/${id}`);
  };

  const handleDeleteModal = (id: number) => {
    setSelectedId(id);
    setIsDeleteModal(true);
  };

  const handleConfirm = () => {
    selectedId &&
      mutate(selectedId, {
        onSuccess: () => {
          setIsDeleteModal(false);
          setSelectedId(null);
        },
      });
  };

  return (
    <Panel>
      <Panel.Header>
        <Breadcrumb
          items={[
            { label: 'Ana səhifə', href: ROUTES.DEFAULT.PATH },
            { label: 'İstifadəçilər', href: ROUTES.USERS.PATH, active: true },
          ]}
        />
        <Typography variant="h5" my={3} color="secondary.dark">
          İstifadəçilər
        </Typography>
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
        <Stack width="100%" height="100%">
          <DataGrid
            getRowHeight={() => 'auto'}
            columns={tableFields({ handleNavigateDetail, handleNavigateEdit, handleDeleteModal })}
            rows={data}
            loading={isLoading}
          />
        </Stack>
      </Panel.Body>
      <ConfirmModal
        title="Silmək istədiyinizə əminsiniz?"
        open={isDeleteModal}
        isLoading={isPending}
        onClose={() => {
          setIsDeleteModal(false);
        }}
        onConfirm={handleConfirm}
      >
        Bu əməliyyat daimidir və geri qaytarıla bilməz. İstifadəçini silmək istədiyinizə əminsiniz?
      </ConfirmModal>
    </Panel>
  );
};

export default UserPage;
