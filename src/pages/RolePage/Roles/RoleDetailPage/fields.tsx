import { type IModelInfo } from 'src/api/model-infos/types';

import { type GridColDef } from '@mui/x-data-grid';

import { getPermissionId } from 'src/constants';
import { ERolePermissionType } from 'src/ts/enums';

export const permissionFields = (
  getHasRoleOrNot: (id: number) => JSX.Element | string,
): GridColDef<IModelInfo>[] => [
  {
    field: 'name',
    sortable: false,
    flex: 1,
    minWidth: 350,
    headerName: 'Ad',
    valueFormatter: (value: string) => value.split('\\')[2],
  },
  {
    flex: 1,
    sortable: false,
    field: 'create',
    headerName: 'Yarat',
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.CREATE);
      return id ? getHasRoleOrNot(id) : '-';
    },
  },
  {
    flex: 1,
    sortable: false,
    field: 'delete',
    headerName: 'Sil',
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.DESTROY);
      return id ? getHasRoleOrNot(id) : '-';
    },
  },
  {
    flex: 1,
    sortable: false,
    field: 'index',
    headerName: 'İndeks',
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.INDEX);
      return id ? getHasRoleOrNot(id) : '-';
    },
  },
  {
    flex: 1,
    sortable: false,
    field: 'edit',
    headerName: 'Yenilə',
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.UPDATE);
      return id ? getHasRoleOrNot(id) : '-';
    },
  },
  {
    flex: 1,
    sortable: false,
    field: 'view',
    headerName: 'Bax',
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.VIEW);
      return id ? getHasRoleOrNot(id) : '-';
    },
  },
];
