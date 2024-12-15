import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteRoleGroup, useGetCompanies, useGetRoleGroups } from 'src/api';
import { type IRoleGroup } from 'src/api/roleGroups/types';

import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { ConfirmModal } from 'src/components';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

const RoleGroups = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { data = [] as IRoleGroup[], isLoading } = useGetRoleGroups();
  const { data: companies } = useGetCompanies(0);
  const { mutate, isPending } = useDeleteRoleGroup();

  const handleNavigateDetail = (id: number) => {
    navigate(`${ROUTES.ROLE_GROUPS.PATH}/detail/${id}`);
  };

  const handleNavigateEdit = (id: number) => {
    navigate(`${ROUTES.ROLE_GROUPS.PATH}/edit/${id}`);
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
    <Stack width="100%" height="100%">
      <DataGrid
        columns={tableFields({
          companies: companies?.data,
          handleNavigateDetail,
          handleNavigateEdit,
          handleDeleteModal,
        })}
        rows={data}
        loading={isLoading}
        getRowHeight={() => 'auto'}
      />
      <ConfirmModal
        title="Silmək istədiyinizə əminsiniz?"
        open={isDeleteModal}
        isLoading={isPending}
        onClose={() => {
          setIsDeleteModal(false);
        }}
        onConfirm={handleConfirm}
      >
        Bu əməliyyat daimidir və geri qaytarıla bilməz. Rol qrupu silmək istədiyinizə əminsiniz?
      </ConfirmModal>
    </Stack>
  );
};

export default RoleGroups;
