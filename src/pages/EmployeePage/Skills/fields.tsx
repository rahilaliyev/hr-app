import { type ISkill } from 'src/api/employees/types';

import { Tooltip, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<ISkill>[] => [
  {
    width: 20,
    field: 'id',
    sortable: false,
    headerName: 'ID',
  },
  {
    sortable: false,
    minWidth: 180,
    field: 'asa',
    headerName: 'A. S. A.',
    renderCell: ({ row }) => (row.employee ? `${row.employee?.firstname} ${row.employee?.lastname}` : '-'),
  },
  {
    sortable: false,
    minWidth: 200,
    field: 'skill_name',
    headerName: 'Bacarığın adı',
  },
  {
    flex: 1,
    sortable: false,
    field: 'skill_description',
    headerName: 'Bacarığın açıqlaması',
    renderCell: ({ row }) => (
      <Tooltip title={row.skill_description}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.skill_description}
        </Typography>
      </Tooltip>
    ),
  },
  {
    minWidth: 160,
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
