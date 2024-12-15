import { type ChangeEvent } from 'react';

import { type IModelInfo } from 'src/api/model-infos/types';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';

import { PermissionCheckbox } from './permissionCheckboxes';

import { getIndeterminateCheckbox, getPermissionId } from 'src/constants';
import { ERolePermissionType } from 'src/ts/enums';

interface IProps {
  modelInfos: IModelInfo[];
  checkedValues: number[];
  handleChangesCheckedValues: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  columnSelectedAll: Record<string, boolean>;
  handleChooseAllCheckesForColumns: (permissionType: ERolePermissionType) => void;
}

export const permissionFields = ({
  modelInfos,
  checkedValues,
  columnSelectedAll,
  handleChangesCheckedValues,
  handleChooseAllCheckesForColumns,
}: IProps): GridColDef<IModelInfo>[] => [
  {
    field: 'name',
    sortable: false,
    headerName: 'Ad',
    valueFormatter: (value: string) => value.split('\\')[2],
    minWidth: 250,
  },
  {
    sortable: false,
    field: 'create',
    headerName: 'Yarat',
    renderHeader: () => {
      const checkboxIndeterminate = getIndeterminateCheckbox({
        state: columnSelectedAll.create,
        checkedValues,
        modelInfos,
        type: ERolePermissionType.CREATE,
      });

      return (
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={columnSelectedAll.create}
              indeterminate={checkboxIndeterminate}
              onChange={() => {
                handleChooseAllCheckesForColumns(ERolePermissionType.CREATE);
              }}
            />
          }
          label={<Typography variant="subtitle2">Yarat</Typography>}
        />
      );
    },
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.CREATE);

      return id ? (
        <PermissionCheckbox
          id={id}
          checked={checkedValues.includes(id)}
          onChange={handleChangesCheckedValues}
        />
      ) : null;
    },
  },
  {
    sortable: false,
    field: 'delete',
    headerName: 'Sil',
    renderHeader: () => {
      const checkboxIndeterminate = getIndeterminateCheckbox({
        state: columnSelectedAll.destroy,
        checkedValues,
        modelInfos,
        type: ERolePermissionType.DESTROY,
      });

      return (
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={columnSelectedAll.destroy}
              indeterminate={checkboxIndeterminate}
              onChange={() => {
                handleChooseAllCheckesForColumns(ERolePermissionType.DESTROY);
              }}
            />
          }
          label={<Typography variant="subtitle2">Sil</Typography>}
        />
      );
    },
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.DESTROY);

      return id ? (
        <PermissionCheckbox
          id={id}
          checked={checkedValues.includes(id)}
          onChange={handleChangesCheckedValues}
        />
      ) : null;
    },
  },
  {
    sortable: false,
    field: 'index',
    minWidth: 105,
    headerName: 'İndeks',
    renderHeader: () => {
      const checkboxIndeterminate = getIndeterminateCheckbox({
        state: columnSelectedAll.index,
        checkedValues,
        modelInfos,
        type: ERolePermissionType.INDEX,
      });

      return (
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={columnSelectedAll.index}
              indeterminate={checkboxIndeterminate}
              onChange={() => {
                handleChooseAllCheckesForColumns(ERolePermissionType.INDEX);
              }}
            />
          }
          label={<Typography variant="subtitle2">İndeks</Typography>}
        />
      );
    },
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.INDEX);

      return id ? (
        <PermissionCheckbox
          id={id}
          checked={checkedValues.includes(id)}
          onChange={handleChangesCheckedValues}
        />
      ) : null;
    },
  },
  {
    sortable: false,
    field: 'edit',
    headerName: 'Yenilə',
    renderHeader: () => {
      const checkboxIndeterminate = getIndeterminateCheckbox({
        state: columnSelectedAll.update,
        checkedValues,
        modelInfos,
        type: ERolePermissionType.UPDATE,
      });

      return (
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={columnSelectedAll.update}
              indeterminate={checkboxIndeterminate}
              onChange={() => {
                handleChooseAllCheckesForColumns(ERolePermissionType.UPDATE);
              }}
            />
          }
          label={<Typography variant="subtitle2">Yenilə</Typography>}
        />
      );
    },
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.UPDATE);

      return id ? (
        <PermissionCheckbox
          id={id}
          checked={checkedValues.includes(id)}
          onChange={handleChangesCheckedValues}
        />
      ) : null;
    },
  },
  {
    sortable: false,
    field: 'view',
    headerName: 'Bax',
    renderHeader: () => {
      const checkboxIndeterminate = getIndeterminateCheckbox({
        state: columnSelectedAll.view,
        checkedValues,
        modelInfos,
        type: ERolePermissionType.VIEW,
      });

      return (
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={columnSelectedAll.view}
              indeterminate={checkboxIndeterminate}
              onChange={() => {
                handleChooseAllCheckesForColumns(ERolePermissionType.VIEW);
              }}
            />
          }
          label={<Typography variant="subtitle2">Bax</Typography>}
        />
      );
    },
    renderCell: ({ row }) => {
      const id = getPermissionId(row, ERolePermissionType.VIEW);

      return id ? (
        <PermissionCheckbox
          id={id}
          checked={checkedValues.includes(id)}
          onChange={handleChangesCheckedValues}
        />
      ) : null;
    },
  },
];
