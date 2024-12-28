import { type ICategory } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<ICategory>[] => [
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
    field: 'name',
    headerName: 'Direktorluq',
    renderCell: ({ row }) =>
      row.structure_level_id === 2 ? row.name : row.parent?.structure_level_id === 2 ? row.parent?.name : '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'department',
    headerName: 'Departament',
    renderCell: ({ row }) =>
      row.structure_level_id === 3 ? row.name : row.parent?.structure_level_id === 3 ? row.parent?.name : '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'branch',
    headerName: 'Şöbə',
    renderCell: ({ row }) =>
      row.structure_level_id === 4 ? row.name : row.parent?.structure_level_id === 4 ? row.parent?.name : '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'areaSection',
    headerName: 'Sahə / Bölmə',
    renderCell: ({ row }) =>
      row.structure_level_id === 5 ? row.name : row.parent?.structure_level_id === 5 ? row.parent?.name : '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'position',
    headerName: 'Vəzifəsi',
    renderCell: ({ row }) => row.position_level?.title ?? '-',
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
