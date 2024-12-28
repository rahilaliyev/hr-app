import dayjs from 'dayjs';

import { type IWorkerContract } from 'src/api/employees/types';

import { Tooltip, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IWorkerContract>[] => [
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
    renderCell: ({ row }) => `${row.employee?.firstname} ${row.employee?.lastname}`,
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'indefinite',
    headerName: 'Müddətlidirmi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'reasons_temporary_clause',
    headerName: 'Müddətli bağlanma səbəbi',
    renderCell: ({ row }) => (
      <Tooltip title={row.reasons_temporary_clause}>
        <Typography variant="subtitle2" noWrap style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.reasons_temporary_clause}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'date_contract',
    headerName: 'Müddətli bağlanma tarixləri',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'probation',
    headerName: 'Sınaq müddəti',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'trial_expiration_date',
    headerName: 'Sınaq müddətinin bitmə tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'employee_start_date',
    headerName: 'İşçinin işə başlama tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'date_conclusion_contract',
    headerName: 'Əmək müqaviləsinin bağlanma tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'regulation_property_relations',
    headerName: 'Mülkiyyət münasibətlərinin tənzimlənməsi',
    renderCell: ({ row }) => (
      <Tooltip title={row.regulation_property_relations}>
        <Typography variant="subtitle2" noWrap style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.regulation_property_relations}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'termination_cases',
    headerName: 'Əmək müqaviləsinə xitam verilməsi barədə tərəflərin müəyyən etdiyi hallar',
    renderCell: ({ row }) => (
      <Tooltip title={row.termination_cases}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.termination_cases}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'other_condition_wages',
    headerName: 'Tərəflərin əmək haqqının ödənilməsi barədə razılığa gəldikləri digər şərtlər',
    renderCell: ({ row }) => (
      <Tooltip title={row.other_condition_wages}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.other_condition_wages}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'workplace_status',
    headerName: 'İş yerinin statusu',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'working_conditions',
    headerName: 'Əmək şəraiti',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'job_description',
    headerName: 'Vəzifə təlimatı',
    renderCell: ({ row }) => (
      <Tooltip title={row.job_description}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.job_description}
        </Typography>
      </Tooltip>
    ),
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'quota',
    headerName: 'Kvota',
    renderCell: ({ row }) => (
      <Tooltip title={row.quota}>
        <Typography noWrap variant="subtitle2" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {row.quota}
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
