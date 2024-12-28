import { type IWorkExperience } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IWorkExperience>[] => [
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
    renderCell: ({ row }) => (row.employee ? `${row.employee?.firstname} ${row.employee?.lastname}` : '-'),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'work_experience_before_enterprise',
    headerName: 'Müəssisəyə qədər iş stajı',
    renderCell: ({ row }) => {
      const result = row.work_experience_before_enterprise.split(',');
      return `${result[0]} il ${result[1]} ay ${result[2]} gün`;
    },
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'work_experience_enterprise',
    headerName: 'Müəssisədəki iş stajı',
    renderCell: ({ row }) => {
      const result = row.work_experience_enterprise.split(',');
      return `${result[0]} il ${result[1]} ay ${result[2]} gün`;
    },
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'general_work_experience',
    headerName: 'Ümumi iş stajı',
    renderCell: ({ row }) => {
      const result = row.general_work_experience.split(',');
      return `${result[0]} il ${result[1]} ay ${result[2]} gün`;
    },
  },
  {
    flex: 1,
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
