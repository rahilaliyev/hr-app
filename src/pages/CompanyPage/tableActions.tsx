import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteCompany } from 'src/api/companies';

import { IconButton, Stack, Tooltip } from '@mui/material';

import { ConfirmModal } from 'src/components';

import { ROUTES } from 'src/routes/const';
import { type ID } from 'src/ts/interface';

import { InfoCircleIcon, PencilIcon, TrashIcon } from 'src/assets/icons';

const TableActions = ({ id }: ID) => {
  const navigate = useNavigate();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { mutate } = useDeleteCompany();

  const handleConfirm = () => {
    mutate(id, {
      onSuccess: () => {
        setIsDeleteModal(false);
      },
    });
  };

  const handleNavigateDetails = () => {
    navigate(`${ROUTES.COMPANIES.PATH}/detail/${id}`);
  };

  const handleNavigateEdit = () => {
    navigate(`${ROUTES.COMPANIES.PATH}/edit/${id}`);
  };

  const handleOpenModal = () => {
    setIsDeleteModal(true);
  };

  return (
    <>
      <Stack gap={2} margin={(theme) => theme.spacing(2.5, 3)}>
        <Tooltip title="Düzəliş et">
          <IconButton
            onClick={handleNavigateEdit}
            sx={{
              padding: 2,
              border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
              borderRadius: (theme) => theme.spacing(2),
            }}
          >
            <PencilIcon width={16} height={16} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Detallar">
          <IconButton
            onClick={handleNavigateDetails}
            sx={{
              padding: 2,
              border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
              borderRadius: (theme) => theme.spacing(2),
            }}
          >
            <InfoCircleIcon width={16} height={16} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sil">
          <IconButton
            onClick={handleOpenModal}
            sx={{
              padding: 2,
              border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
              borderRadius: (theme) => theme.spacing(2),
            }}
          >
            <TrashIcon width={16} height={16} />
          </IconButton>
        </Tooltip>
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
