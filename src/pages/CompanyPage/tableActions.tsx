import { IconButton, Stack } from '@mui/material';

import { type ID } from 'src/ts/interface';

import { InfoCircleIcon, TrashIcon } from 'src/assets/icons';

// eslint-disable-next-line
//@ts-expect-error
const TableActions = ({ id }: ID) => {
  return (
    <>
      <Stack gap={2} margin={(theme) => theme.spacing(2.5, 3)}>
        <IconButton
          sx={{
            padding: 2,
            border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
            borderRadius: (theme) => theme.spacing(2),
          }}
        >
          <InfoCircleIcon width={16} height={16} />
        </IconButton>
        <IconButton
          sx={{
            padding: 2,
            border: (theme) => `${theme.spacing(0.25)} solid ${theme.palette.grey[200]}`,
            borderRadius: (theme) => theme.spacing(2),
          }}
        >
          <TrashIcon width={16} height={16} />
        </IconButton>
      </Stack>
    </>
  );
};

export default TableActions;
