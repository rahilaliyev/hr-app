// TODO: FIX PERMISSION BUG

import { type ChangeEvent, memo } from 'react';

// import { useGetModelInfos } from 'src/api';
import { Checkbox } from '@mui/material';

interface IProps {
  id: number;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
}

export const PermissionCheckbox = memo(({ id, checked, onChange }: IProps) => {
  // const { data: modelInfos = [] as IModelInfo[], isLoading: isModelLoading } = useGetModelInfos();

  // const parentId = (permissionId: number): number | undefined => {
  //   for (const model of modelInfos) {
  //     if (model.permissions.some((permission: any) => permission.id === permissionId)) {
  //       return model.id; // Return the parent model ID
  //     }
  //   }
  //   return undefined; // Return undefined if no parent ID is found
  // };

  return (
    <>
      {/* {id} */}
      <Checkbox
        size="small"
        checked={checked}
        onChange={(e) => {
          onChange(e, id);
        }}
      />
      {/* {parentId(id)} */}
    </>
  );
});

PermissionCheckbox.displayName = 'PermissionCheckbox';
