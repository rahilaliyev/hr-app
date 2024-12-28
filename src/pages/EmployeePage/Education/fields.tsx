import dayjs from 'dayjs';

import { type IEducationInfo } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IEducationInfo>[] => [
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
    field: 'education',
    headerName: 'Təhsili',
    renderCell: ({ row }) => row.qualification?.label ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'institution_name',
    headerName: 'Təhsil müəssisəsinin adı',
    renderCell: ({ row }) => row.institution?.name ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'faculty',
    headerName: 'Fakültə',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'profession',
    headerName: 'İxtisas',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'diplom_seria_num',
    headerName: 'Diplomun seriya və nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'end_date',
    headerName: 'Bitirdiyi il',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'diplom_issue_date',
    headerName: 'Diplomun verildiyi tarix',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
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
