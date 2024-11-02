import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import { Box, FormControl, type FormControlProps, TextField, type TextFieldProps } from '@mui/material';

type ITextField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  TextFieldProps & {
    hasErrorHeight?: boolean;
  };

export const CustomTextField = (props: ITextField) => {
  const { name, defaultValue, helperText, rules, error: restError, ...rest } = props;
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const message = error?.message ?? helperText ?? '';

  return (
    <FormControl fullWidth>
      <TextField {...field} {...rest} />
      <Box
        component="span"
        sx={(theme) => ({
          color: (error ?? restError) ? theme.palette.error.main : theme.palette.primary.main,
          fontSize: theme.spacing(3),
          display: 'inline-block',
          marginTop: theme.spacing(1),
          textAlign: 'left',
          visibility: typeof message === 'string' && message.length > 0 ? 'visible' : 'hidden',
        })}
      >
        {message}
      </Box>
    </FormControl>
  );
};
