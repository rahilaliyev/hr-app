import dayjs from 'dayjs';

import { type IMilitaryInfo } from 'src/api/employees/types';

import { Tooltip, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IMilitaryInfo>[] => [
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
    minWidth: 160,
    field: 'group',
    headerName: 'Qeydiyyat qrupu',
    renderCell: ({ row }) => row.group.label,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'registerCategory',
    headerName: 'Qeydiyyat kateqoriyası',
    renderCell: ({ row }) => (row.category?.id === 1 ? 'Kateqoriya 1' : 'Kateqoriya 2'),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'staff',
    headerName: 'Heyət',
    renderCell: ({ row }) => row.staff?.label,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'rank',
    headerName: 'Hərbi rütbə',
    renderCell: ({ row }) => row.rank?.label,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 160,
    field: 'specialty_acc',
    headerName: 'Hərbi uçot ixtisası',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'fitness_service',
    headerName: 'Hərbi xidmətə yararlılıq',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'registration_service',
    headerName: 'Hərbi qeydiyyat üzrə xidmətin yeri',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'registration_date',
    headerName: 'Hərbi qeydiyyata alındığı tarix',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'general',
    headerName: 'Ümumi (komanda №-si)',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'special',
    headerName: 'Xüsusi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'no_official',
    headerName: 'Hərbi vəzifəli olmaması barədə qeyd',
    renderCell: ({ row }) => (
      <Tooltip title={row.no_official}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.no_official}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'additional_information',
    headerName: 'Əlavə məlumatlar',
    renderCell: ({ row }) => (
      <Tooltip title={row.additional_information}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.additional_information}
        </Typography>
      </Tooltip>
    ),
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
