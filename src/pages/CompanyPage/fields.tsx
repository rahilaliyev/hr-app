import { type ICompanies } from 'src/api/companies/types';

import { type GridColDef } from '@mui/x-data-grid';

import TableActions from './tableActions';

export const tableFields: GridColDef<ICompanies>[] = [
  {
    minWidth: 50,
    field: 'id',
    sortable: false,
    flex: 1,
    headerName: 'ID',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'name',
    headerName: 'Şirkətin adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'voen',
    headerName: 'VÖEN',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'enterprise_head_fullname',
    headerName: 'Rəhbərin S.A.A',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 180,
    field: 'enterprise_head_position',
    headerName: 'Rəhbərin vəzifəsi',
  },
  {
    flex: 1,
    minWidth: 120,
    field: 'actions',
    sortable: false,
    headerName: '',
    renderCell: ({ row }) => <TableActions id={row?.id} />,
  },
];
