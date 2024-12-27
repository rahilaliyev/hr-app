import { type IFamilyInfo } from 'src/api/employees/types';

import { Box, Tooltip } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IFamilyInfo>[] => [
  {
    width: 20,
    field: 'id',
    sortable: false,
    headerName: 'ID',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'asa',
    headerName: 'A. S. A.',
    renderCell: ({ row }) => `${row.employee.firstname} ${row.employee.lastname}`,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'name',
    headerName: 'Adı',
    renderCell: ({ row }) => `${row.m_firstname} ${row.m_lastname}`,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'relationship',
    headerName: 'Qohumluq',
    renderCell: ({ row }) => row.family_member_type.label,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'contact_number',
    headerName: 'Əlaqə nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'address',
    headerName: 'Ünvan',
    renderCell: ({ row }) => (
      <Tooltip title={row.address}>
        <Box>{row.address}</Box>
      </Tooltip>
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
