import dayjs from 'dayjs';

import { type IDriverLicense } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IDriverLicense>[] => [
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
    minWidth: 180,
    field: 'license_serial_number',
    headerName: 'Vəsiqənin seriya və nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'category',
    headerName: 'Kateqoriya',
    renderCell: ({ row }) => row.category?.description ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'license_issuer',
    headerName: 'Vəsiqəni verən orqan',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'issue_date',
    headerName: 'Vəsiqənin verildiyi tarix',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'expire_date',
    headerName: 'Etibarlılıq müddəti',
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
