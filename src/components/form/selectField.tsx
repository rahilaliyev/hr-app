import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import {
  Box,
  FormControl,
  type FormControlProps,
  InputLabel,
  MenuItem,
  Select,
  type SelectProps,
  Typography,
} from '@mui/material';

import { LoaderOverlay } from '../ui/loaderOverlay';

interface ISelectItem {
  value: string | number;
  label: string | number;
}

type TSelectField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  SelectProps & {
    hasErrorHeight?: boolean;
    items: ISelectItem[];
    helperText?: React.ReactNode;
    loading?: boolean;
  };

export const SelectField = (props: TSelectField) => {
  const {
    hasErrorHeight = true,
    name,
    defaultValue,
    rules,
    helperText,
    error: restError,
    label,
    loading,
    placeholder,
    items = [],
    ...rest
  } = props;
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

  let content = null;
  const message = error?.message ?? helperText ?? '';

  if (loading ?? !items.length) {
    content = (
      <Typography
        variant="body2"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          padding: (theme) => theme.spacing(2, 4),
        }}
      >
        {loading ? 'Yüklənir' + '...' : 'Məlumat yoxdur'}
      </Typography>
    );
  } else {
    content = items.map((item) => (
      <MenuItem key={item.value} value={item.value}>
        {item.label}
      </MenuItem>
    ));
  }

  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel
          sx={{
            '&.Mui-error': {
              color: (theme) => theme.palette.text.secondary,
            },
          }}
        >
          {label}
        </InputLabel>
      )}
      <Select
        {...field}
        {...rest}
        {...(loading
          ? {
              IconComponent: () => (
                <LoaderOverlay loading={loading} size={20} margin={0}>
                  sa
                </LoaderOverlay>
              ),
            }
          : {})}
      >
        <MenuItem value="" disabled>
          {placeholder ?? 'Seçin'}
        </MenuItem>
        {content}
      </Select>
      <Box
        component="span"
        sx={(theme) => ({
          color: (error ?? restError) ? theme.palette.error.main : theme.palette.primary.main,
          fontSize: theme.spacing(3),
          display: 'inline-block',
          marginTop: theme.spacing(1),
          textAlign: 'left',
          height: hasErrorHeight ? theme.spacing(4.5) : 'unset',
          visibility: message ? 'visible' : 'hidden',
        })}
      >
        {message}
      </Box>
    </FormControl>
  );
};
