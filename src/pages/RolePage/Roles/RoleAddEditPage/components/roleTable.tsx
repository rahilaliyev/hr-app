import { type ChangeEvent, type Dispatch, type SetStateAction, useCallback, useMemo, useState } from 'react';

import { useGetModelInfos } from 'src/api';
import { type IModelInfo } from 'src/api/model-infos/types';

import { Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DataGrid } from '@mui/x-data-grid';

import { permissionFields } from './fields';

import { type ERolePermissionType } from 'src/ts/enums';

interface IProps {
  checkedValues: number[];
  setCheckedValues: Dispatch<SetStateAction<number[]>>;
}

// const exampleData = [
//   {
//     id: 43,
//     name: 'App\\Models\\Holiday',
//     alias: null,
//     permissions: [
//       {
//         id: 211,
//         name: 'holidays create',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//       {
//         id: 215,
//         name: 'holidays destroy',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//       {
//         id: 213,
//         name: 'holidays index',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//       {
//         id: 212,
//         name: 'holidays update',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//       {
//         id: 214,
//         name: 'holidays view',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//     ],
//     created_at: '2024-06-12T07:52:09.000000Z',
//     updated_at: '2024-06-12T07:52:09.000000Z',
//   },
//   {
//     id: 44,
//     name: 'App\\Models\\Interviewee',
//     alias: null,
//     permissions: [
//       {
//         id: 216,
//         name: 'intervieee create',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//       {
//         id: 220,
//         name: 'intervieee destroy',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//       {
//         id: 218,
//         name: 'intervieee index',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//       {
//         id: 217,
//         name: 'intervieee update',
//         created_at: '2024-06-12T07:50:29.000000Z',
//         updated_at: '2024-06-12T07:50:29.000000Z',
//       },
//       {
//         id: 219,
//         name: 'intervieee view',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//     ],
//     created_at: '2024-06-12T07:52:09.000000Z',
//     updated_at: '2024-06-12T07:52:09.000000Z',
//   },
//   {
//     id: 45,
//     name: 'App\\Models\\Interviewer',
//     alias: null,
//     permissions: [
//       {
//         id: 221,
//         name: 'interviewer create',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//       {
//         id: 225,
//         name: 'interviewer destroy',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//       {
//         id: 223,
//         name: 'interviewer index',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//       {
//         id: 222,
//         name: 'interviewer update',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//       {
//         id: 224,
//         name: 'interviewer view',
//         created_at: '2024-06-12T07:50:30.000000Z',
//         updated_at: '2024-06-12T07:50:30.000000Z',
//       },
//     ],
//     created_at: '2024-06-12T07:52:09.000000Z',
//     updated_at: '2024-06-12T07:52:09.000000Z',
//   },
// ];

const RoleTable = ({ checkedValues, setCheckedValues }: IProps) => {
  const [columnSelectedAll, setColumnSelectedAll] = useState<Record<ERolePermissionType, boolean>>({
    create: false,
    destroy: false,
    index: false,
    update: false,
    view: false,
  });

  const { data: modelInfos = [] as IModelInfo[], isLoading: isModelLoading } = useGetModelInfos();

  // const modelInfos: IModelInfo[] = exampleData || [];
  const allPermissionId = useMemo(() => {
    return modelInfos.flatMap((el) => el.permissions?.map((role) => role.id));
  }, [modelInfos]);

  const handleChangesCheckedValues = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: number) => {
      setCheckedValues((prev) => (e.target.checked ? [...prev, id] : prev.filter((value) => value !== id)));
    },
    [setCheckedValues],
  );

  const handleChooseAllCheckesForColumns = useCallback(
    (permissionType: ERolePermissionType) => {
      const columnIds = modelInfos
        .flatMap((el) => el.permissions)
        .filter((permission) => permission.name.includes(permissionType))
        .map((permission) => permission.id);

      const allSelectedColumns = columnIds.every((id) => checkedValues.includes(id));

      setCheckedValues((prev) =>
        allSelectedColumns
          ? prev.filter((id) => !columnIds.includes(id))
          : [...new Set([...prev, ...columnIds])],
      );

      setColumnSelectedAll((prev) => ({
        ...prev,
        [permissionType]: !allSelectedColumns,
      }));
    },
    [checkedValues, modelInfos, setCheckedValues],
  );

  const handleChooseAllCheckes = useCallback(() => {
    if (checkedValues.length !== allPermissionId.length) {
      setCheckedValues(allPermissionId);
      setColumnSelectedAll({
        create: true,
        destroy: true,
        index: true,
        update: true,
        view: true,
      });
    } else {
      setCheckedValues([]);
      setColumnSelectedAll({
        create: false,
        destroy: false,
        index: false,
        update: false,
        view: false,
      });
    }
  }, [checkedValues, allPermissionId, setCheckedValues]);

  const fields = useMemo(
    () =>
      permissionFields({
        modelInfos,
        checkedValues,
        handleChangesCheckedValues,
        columnSelectedAll,
        handleChooseAllCheckesForColumns,
      }),
    [
      checkedValues,
      columnSelectedAll,
      handleChangesCheckedValues,
      handleChooseAllCheckesForColumns,
      modelInfos,
    ],
  );

  return (
    <Grid size={12}>
      {!isModelLoading && (
        <Button variant="outlined" onClick={handleChooseAllCheckes} size="small" sx={{ mb: 4 }}>
          {checkedValues.length === allPermissionId?.length
            ? 'Rolların hamısını sil'
            : 'Rolların hamısını seç'}
        </Button>
      )}
      <Stack height="50vh">
        <DataGrid columns={fields} loading={isModelLoading} rows={modelInfos} disableVirtualization={false} />
      </Stack>
    </Grid>
  );
};

export default RoleTable;
