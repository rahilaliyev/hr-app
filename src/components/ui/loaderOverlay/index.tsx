import { Box, CircularProgress, type CircularProgressProps } from '@mui/material';

type TLoaderSpinnerProps = CircularProgressProps & {
  loading: boolean;
  children: React.ReactNode;
};

export const LoaderOverlay = (props: TLoaderSpinnerProps) => {
  const { loading, children } = props;
  return loading ? (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
