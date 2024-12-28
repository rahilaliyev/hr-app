import { type IEmployee } from 'src/api/employees/types';

import { Avatar, Chip } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IEmployee>[] => [
  {
    width: 20,
    field: 'id',
    sortable: false,
    headerName: 'ID',
  },
  {
    sortable: false,
    width: 80,
    field: 'image_name',
    headerName: 'Şəkil',
    renderCell: ({ row }) => (
      <Avatar
        sx={{ width: (theme) => theme.spacing(8), height: (theme) => theme.spacing(8) }}
        alt={row?.firstname}
        src={row.image_name}
      />
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'firstname',
    headerName: 'Adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'lastname',
    headerName: 'Soyadı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'father_name',
    headerName: 'Ata adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'mob_tel',
    headerName: 'Mobil nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 100,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => (
      <Chip color={row?.status ? 'success' : 'error'} label={row?.status ? 'Aktiv' : 'Deaktiv'} />
    ),
  },
  {
    flex: 1,
    minWidth: 120,
    field: 'actions',
    sortable: false,
    headerName: '',
    renderCell: ({ row }) => (
      <TableActions
        id={row?.id}
        handleNavigateDetail={handleNavigateDetail}
        handleNavigateEdit={handleNavigateEdit}
        handleDeleteModal={handleDeleteModal}
      />
    ),
  },
];
