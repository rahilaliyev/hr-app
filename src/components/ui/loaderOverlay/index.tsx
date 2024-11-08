import { Box, CircularProgress, type CircularProgressProps } from '@mui/material';

type TLoaderSpinnerProps = CircularProgressProps & {
  loading: boolean;
  children: React.ReactNode;
  height?: string | number;
};

export const LoaderOverlay = ({ loading, children, height = 'unset', ...props }: TLoaderSpinnerProps) => {
  return loading ? (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
      }}
    >
      <CircularProgress
        color="primary"
        size={20}
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
