import dayjs from 'dayjs';

import { type ICompany } from 'src/api/companies/types';
import { type IRoleGroup } from 'src/api/roleGroups/types';

import { Chip, Stack } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { TableActions } from 'src/components/ui/tableActions';

import { EUROPEAN_DATE_FORMAT } from 'src/constants';
import { type ITableActionProps } from 'src/ts/interface';

export const tableFields = ({
  companies,
  handleNavigateDetail,
  handleNavigateEdit,
  handleDeleteModal,
}: ITableActionProps & { companies?: ICompany[] }): GridColDef<IRoleGroup>[] => [
  {
    width: 20,
    field: 'id',
    sortable: false,
    headerName: 'ID',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 100,
    field: 'name',
    headerName: 'Adı',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 230,
    field: 'roles',
    headerName: 'Rollar',
    renderCell: ({ row }) => {
      const roles = row?.roles?.length > 5 ? row?.roles?.slice(0, 5) : row?.roles;
      return (
        <Stack gap={3} flexWrap="wrap">
          {roles?.map((role) => <Chip color="info" size="small" key={role?.id} label={role?.name} />)}
        </Stack>
      );
    },
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 130,
    field: 'company_id',
    headerName: 'Şirkət',
    valueFormatter: (value) => companies?.find((cmp) => cmp.id === value)?.name ?? '-',
  },
  {
    flex: 1,
    sortable: false,
    minWidth: 150,
    field: 'created_at',
    headerName: 'Yaradılma tarixi',
    valueFormatter: (value) => dayjs(value).format(EUROPEAN_DATE_FORMAT),
  },
  {
    flex: 1,
    minWidth: 120,
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
