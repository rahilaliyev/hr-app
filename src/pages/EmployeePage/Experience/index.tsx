import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteEmployeeWorkExperience, useGetEmployeeWorkExperience } from 'src/api';
import { type IWorkExperience } from 'src/api/employees/types';

import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { ConfirmModal } from 'src/components';

import { tableFields } from './fields';

import { ROUTES } from 'src/routes/const';

const Experience = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { data = [] as IWorkExperience[], isLoading } = useGetEmployeeWorkExperience();
  const { mutate, isPending } = useDeleteEmployeeWorkExperience();

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

  const fields = tableFields({
    handleNavigateDetail,
    handleNavigateEdit,
    handleDeleteModal,
  });

  return (
    <Stack width="100%" height="100%">
      <DataGrid columns={fields} rows={data} loading={isLoading} />
      <ConfirmModal
        title="Silmək istədiyinizə əminsiniz?"
        open={isDeleteModal}
        isLoading={isPending}
        onClose={() => {
          setIsDeleteModal(false);
        }}
        onConfirm={handleConfirm}
      >
        Bu əməliyyat daimidir və geri qaytarıla bilməz. İşçinin staj məlumatını silmək istədiyinizə əminsiniz?
      </ConfirmModal>
    </Stack>
  );
};

export default Experience;
