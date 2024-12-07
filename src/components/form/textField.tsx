import { useState } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import {
  Box,
  FormControl,
  type FormControlProps,
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from '@mui/material';

import { EyeIcon, EyeSlashIcon } from 'src/assets/icons';

type ITextField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  TextFieldProps & {
    hasErrorHeight?: boolean;
  };

export const CustomTextField = (props: ITextField) => {
  const { name, defaultValue, helperText, rules, error: restError, type, ...rest } = props;
  const { control } = useFormContext();
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const togglePasswordVisibility = () => {
    setIsPasswordShow((prev) => !prev);
  };

  const message = error?.message ?? helperText ?? '';
  const isPasswordField = type === 'password';

  return (
    <FormControl fullWidth>
      <TextField
        {...field}
        {...rest}
        type={isPasswordField && isPasswordShow ? 'text' : type}
        slotProps={{
          input: {
            endAdornment: isPasswordField ? (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {isPasswordShow ? <EyeSlashIcon /> : <EyeIcon />}
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
      />
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
