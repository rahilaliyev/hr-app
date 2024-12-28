import dayjs from 'dayjs';

import { type IPrevPosition } from 'src/api/employees/types';

import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps): GridColDef<IPrevPosition>[] => [
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
    field: 'prev_employer',
    headerName: 'İşəgötürənin adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 200,
    field: 'date',
    headerName: 'Tarix aralığı',
    renderCell: ({ row }: { row: { start_date?: string | null; end_date?: string | null } }) => {
      const startDate = row.start_date ? dayjs(row.start_date).format(EUROPEAN_DATE_FORMAT) : '';
      const endDate = row.end_date ? dayjs(row.end_date).format(EUROPEAN_DATE_FORMAT) : '';
      return `${startDate} - ${endDate}`;
    },
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'leave_reason',
    headerName: 'İşdən çıxma səbəbi',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 170,
    field: 'sector',
    headerName: 'Fəaliyyət sektoru',
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
