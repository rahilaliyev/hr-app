import { type IModelInfo } from 'src/api/model-infos/types';

import { type ERolePermissionType } from 'src/ts/enums';

export const getPermissionId = (row: IModelInfo, type: ERolePermissionType): number | undefined => {
  return row.permissions?.find((permission) => {
    const words = permission.name.trim().split(' ');
    return words[words.length - 1] === type;
  })?.id;
};

export const getIndeterminateCheckbox = ({
  state,
  checkedValues,
  modelInfos,
  type,
}: {
  state: boolean;
  checkedValues: number[];
  modelInfos: IModelInfo[];
  type: ERolePermissionType;
}) => {
  return (
    !state &&
    checkedValues.some((id) =>
      modelInfos
        .flatMap((el) => el.permissions)
        .filter((perm) => {
          const words = perm.name.split(' ');
          const lastWord = words[words.length - 1];
          return lastWord === type;
        })
        .map((perm) => perm.id)
        .includes(id),
    )
  );
};
