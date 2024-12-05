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
    defaultValueDisable?: boolean;
    multiple?: boolean;
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
    defaultValueDisable = true,
    items = [],
    multiple = false,
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
              IconComponent: () => <LoaderOverlay loading={loading} size={20} margin={0} width="unset" />,
            }
          : {})}
        multiple={multiple}
        value={field.value || (multiple ? [] : '')}
        renderValue={(selected) => {
          if (multiple && Array.isArray(selected)) {
            return selected.length
              ? selected.map((value) => items.find((item) => item.value === value)?.label).join(', ')
              : (placeholder ?? 'Seçin');
          }
          return items.find((item) => item.value === selected)?.label ?? placeholder ?? 'Seçin';
        }}
      >
        <MenuItem value="" disabled={defaultValueDisable}>
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
