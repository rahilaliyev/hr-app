import { useState } from 'react';

import { useDeleteCompany } from 'src/api/companies';

import { IconButton, Stack } from '@mui/material';

import { ConfirmModal } from 'src/components';

import { type ID } from 'src/ts/interface';

import { InfoCircleIcon, TrashIcon } from 'src/assets/icons';

const TableActions = ({ id }: ID) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { mutate } = useDeleteCompany();

  const handleConfirm = () => {
    mutate(id, {
      onSuccess: () => {
        setIsDeleteModal(false);
      },
    });
  };

  return (
    <>
      <Stack gap={2} margin={(theme) => theme.spacing(2.5, 3)}>
        <IconButton
          sx={{
            padding: 2,
            border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
            borderRadius: (theme) => theme.spacing(2),
          }}
        >
          <InfoCircleIcon width={16} height={16} />
        </IconButton>
        <IconButton
          onClick={() => {
            setIsDeleteModal(true);
          }}
          sx={{
            padding: 2,
            border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
            borderRadius: (theme) => theme.spacing(2),
          }}
        >
          <TrashIcon width={16} height={16} />
        </IconButton>
        <ConfirmModal
          title="Silmək istədiyinizə əminsiniz?"
          open={isDeleteModal}
          onClose={() => {
            setIsDeleteModal(false);
          }}
          onConfirm={handleConfirm}
        >
          Bu əməliyyat daimidir və geri qaytarıla bilməz. Şirkəti silmək istədiyinizə əminsiniz?
        </ConfirmModal>
      </Stack>
    </>
  );
};

export default TableActions;
