import { type IUser } from 'src/api/users/types';

import { Chip, Stack } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IUser>[] => [
  {
    minWidth: 50,
    field: 'id',
    sortable: false,
    flex: 1,
    headerName: 'ID',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'username',
    headerName: 'İstifadəçi adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'firstname',
    headerName: 'Adı',
    renderCell: ({ row }) => row?.employee?.firstname,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'lastname',
    headerName: 'Soyadı',
    renderCell: ({ row }) => row?.employee?.lastname,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }) => row?.employee?.email,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 220,
    field: 'company_places',
    headerName: 'İş yeri',
    renderCell: ({ row }) => (
      <Stack gap={3} flexWrap="wrap">
        {row?.companies?.map((el) => <Chip size="small" key={el?.id} label={el?.name} />)}
      </Stack>
    ),
  },
  {
    flex: 1,
    minWidth: 180,
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
