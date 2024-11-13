import { type ICompanies } from 'src/api/companies/types';

import { type GridColDef } from '@mui/x-data-grid';

export const tableFields: GridColDef<ICompanies>[] = [
  {
    minWidth: 50,
    field: 'id',
    flex: 1,
    headerName: 'ID',
  },
  {
    flex: 1,
    minWidth: 240,
    field: 'name',
    headerName: 'Şirkətin adı',
  },
  {
    flex: 1,
    minWidth: 220,
    field: 'voen',
    headerName: 'VÖEN',
  },
  {
    flex: 1,
    minWidth: 240,
    field: 'enterprise_head_fullname',
    headerName: 'Rəhbərin S.A.A',
  },
  {
    flex: 1,
    minWidth: 220,
    field: 'enterprise_head_position',
    headerName: 'Rəhbərin vəzifəsi',
  },
];
