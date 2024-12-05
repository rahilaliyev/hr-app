import { Box, CircularProgress, type CircularProgressProps } from '@mui/material';

type TLoaderSpinnerProps = CircularProgressProps & {
  loading: boolean;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  margin?: number;
  size?: number;
};

export const LoaderOverlay = ({
  loading,
  children,
  height = 'unset',
  width = '100%',
  size = 30,
  margin,
  ...props
}: TLoaderSpinnerProps) => {
  return loading ? (
    <Box
      width={width}
      m={margin ?? 5}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
      }}
    >
      <CircularProgress
        color="primary"
        size={size}
        value={20}
        thickness={5}
        sx={(theme) => ({
          marginRight: theme.spacing(3.5),
        })}
        {...props}
      />
    </Box>
  ) : (
    children
  );
};
