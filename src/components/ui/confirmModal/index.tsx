import { type MouseEvent, type ReactNode } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  type DialogProps,
  DialogTitle,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { LoaderOverlay } from '../loaderOverlay';

import { CautionFillIcon } from 'src/assets/icons';

interface IConfirmModalProps extends DialogProps {
  onConfirm: () => void;
  title?: string;
  message?: string;
  children: ReactNode;
  isLoading?: boolean;
}

export const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title,
  children,
  isLoading = false,
}: IConfirmModalProps) => {
  const theme = useTheme();

  const handleClose = (event: MouseEvent) => {
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          p: 5,
          borderRadius: 3,
        },
      }}
    >
      <LoaderOverlay loading={isLoading} sx={{ flexDirection: 'column !important' }}>
        <Stack justifyContent="center" flexDirection="column" alignItems="center">
          <CautionFillIcon width={54} height={54} pathFill={theme.palette.error.main} />
          <DialogTitle variant="h5" fontWeight={600} mt={5}>
            <Typography variant="body1" fontWeight={600} color="secondary.dark">
              {title}
            </Typography>
          </DialogTitle>
        </Stack>
        <DialogContent>
          <Typography variant="subtitle1" textAlign="center" mb={5} sx={{ color: theme.palette.grey[500] }}>
            {children}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Stack justifyContent="space-between" gap={3} width="100%">
            <Button fullWidth color="error" variant="outlined" size="medium" onClick={handleClose}>
              Bağla
            </Button>
            <Button fullWidth color="error" onClick={onConfirm} size="medium">
              Təsdiqlə
            </Button>
          </Stack>
        </DialogActions>
      </LoaderOverlay>
    </Dialog>
  );
};
