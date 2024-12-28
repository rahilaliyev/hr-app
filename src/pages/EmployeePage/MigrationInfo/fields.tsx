import dayjs from 'dayjs';

import { type IMigrationInfo } from 'src/api/employees/types';

import { Tooltip, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IMigrationInfo>[] => [
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
    field: 'trp_serial_number',
    headerName: 'Vəsiqənin seriya və nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'trp_permit_reason',
    headerName: 'İcazə verilməsinə əsas',
    renderCell: ({ row }) => (
      <Tooltip title={row.trp_permit_reason}>
        <Typography variant="subtitle2" noWrap style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.trp_permit_reason}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'trp_permit_date',
    headerName: 'İcazənin verilmə tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'trp_valid_date',
    headerName: 'Etibarlılıq müddəti',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'trp_issuer',
    headerName: 'İcazə verən orqanın adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'prp_serial_number',
    headerName: 'Vəsiqənin seriya və nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'prp_permit_date',
    headerName: 'İcazənin verilmə tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'prp_valid_date',
    headerName: 'Etibarlılıq müddəti',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'prp_issuer',
    headerName: 'İcazə verən orqanın adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'wp_serial_number',
    headerName: 'İş icazəsinin seriya və nömrəsi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'wp_permit_date',
    headerName: 'İcazənin verilmə tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'wp_valid_date',
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
