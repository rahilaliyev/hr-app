import { IconButton, Stack, Tooltip } from '@mui/material';

import { type ID } from 'src/ts/interface';

import { InfoCircleIcon, PencilIcon, TrashIcon } from 'src/assets/icons';

interface ITableActionProps extends ID {
  handleNavigateDetail: (id: number) => void;
  handleNavigateEdit: (id: number) => void;
  handleDeleteModal: (id: number) => void;
}
export const TableActions = ({
  id,
  handleDeleteModal,
  handleNavigateEdit,
  handleNavigateDetail,
}: ITableActionProps) => (
  <Stack gap={2} margin={(theme) => theme.spacing(2.5, 3)}>
    <Tooltip title="Düzəliş et">
      <IconButton
        onClick={() => {
          handleNavigateEdit(id);
        }}
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
        onClick={() => {
          handleNavigateDetail(id);
        }}
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
        onClick={() => {
          handleDeleteModal(id);
        }}
        sx={{
          padding: 2,
          border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
          borderRadius: (theme) => theme.spacing(2),
        }}
      >
        <TrashIcon width={16} height={16} />
      </IconButton>
    </Tooltip>
  </Stack>
);
