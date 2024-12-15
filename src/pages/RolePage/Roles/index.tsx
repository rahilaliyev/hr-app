import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteRole, useGetCompanies, useGetRoles } from 'src/api';
import { type IRole } from 'src/api/roles/types';

import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { ConfirmModal } from 'src/components';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

const Roles = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { data = [] as IRole[], isLoading } = useGetRoles();
  const { data: companies } = useGetCompanies(0);
  const { mutate } = useDeleteRole();

  const handleNavigateDetail = (id: number) => {
    navigate(`${ROUTES.ROLES.PATH}/detail/${id}`);
  };

  const handleNavigateEdit = (id: number) => {
    navigate(`${ROUTES.ROLES.PATH}/edit/${id}`);
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
        onClose={() => {
          setIsDeleteModal(false);
        }}
        onConfirm={handleConfirm}
      >
        Bu əməliyyat daimidir və geri qaytarıla bilməz. Rolu silmək istədiyinizə əminsiniz?
      </ConfirmModal>
    </Stack>
  );
};

export default Roles;
