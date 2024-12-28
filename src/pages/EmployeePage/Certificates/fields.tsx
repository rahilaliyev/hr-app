import dayjs from 'dayjs';

import { type ICertificates } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<ICertificates>[] => [
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
    field: 'training_center_name',
    headerName: 'Tədris mərkəzinin adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'training_name',
    headerName: 'Tədrisin adı/mövzusu',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'training_date',
    headerName: 'Tədrisin tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'given_date',
    headerName: 'Sertifikatın verilmə tarixi',
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
