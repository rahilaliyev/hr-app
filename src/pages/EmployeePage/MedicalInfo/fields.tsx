import dayjs from 'dayjs';

import { type IMedicalInfo } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IMedicalInfo>[] => [
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
    minWidth: 120,
    field: 'medicalCertificate',
    headerName: 'Tibbi arayış',
    renderCell: ({ row }) => row.medical_app?.label ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'renew_interval',
    headerName: 'Yenilənmə sıxlığı',
    renderCell: ({ row }) => (row.renew_interval ? `${row.renew_interval} ay` : '-'),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 220,
    field: 'last_renew_date',
    headerName: 'Sonuncu yenilənmə tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'physical_deficiency',
    headerName: 'Fiziki çatışmazlığı varmı',
    renderCell: ({ row }) => row.physical_deficiency?.label ?? '-',
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
