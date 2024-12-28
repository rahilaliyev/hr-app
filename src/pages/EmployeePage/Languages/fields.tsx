import { type ILanguageKnowledge } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<ILanguageKnowledge>[] => [
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
    minWidth: 150,
    field: 'language',
    headerName: 'Dil',
    renderCell: ({ row }) => row.language?.name ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'reading',
    headerName: 'Oxuma',
    renderCell: ({ row }) => row.language_reading?.label ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'writing',
    headerName: 'Yazma',
    renderCell: ({ row }) => row.language_writing?.label ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'speaking',
    headerName: 'Danışma',
    renderCell: ({ row }) => row.language_speaking?.label ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'understanding',
    headerName: 'Başa düşmə',
    renderCell: ({ row }) => row.language_understanding?.label ?? '-',
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
