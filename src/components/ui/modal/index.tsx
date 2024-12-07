import { type MouseEvent } from 'react';
import { modalTheme } from 'src/theme';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  type DialogProps,
  DialogTitle,
  Stack,
  ThemeProvider,
} from '@mui/material';

import { LoaderOverlay } from '../loaderOverlay';

interface IModalProps extends Omit<DialogProps, 'onClose' | 'actions'> {
  title?: string;
  onClose?: (event: MouseEvent, reason: 'backdropClick' | 'escapeKeyDown') => void;
  hideActionsBtns?: boolean;
  loading?: boolean;
  logo?: React.ReactNode;
  submitText?: string;
  onClickSubmitButton?: () => void;
}

export const ModalComponent = (props: IModalProps) => {
  const {
    sx,
    logo,
    open,
    title,
    onClose,
    children,
    maxWidth,
    submitText,
    fullScreen,
    hideActionsBtns,
    loading = false,
    disableEscapeKeyDown = false,
    onClickSubmitButton,
  } = props;

  const handleButtonClose = (event: MouseEvent) => {
    if (onClose) {
      onClose(event, 'escapeKeyDown');
    }
  };

  return (
    <ThemeProvider theme={modalTheme}>
      <Dialog
        open={open}
        onClose={onClose}
        data-testid="modal"
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        disableEscapeKeyDown={disableEscapeKeyDown}
        sx={sx}
      >
        <LoaderOverlay loading={loading} sx={{ flexDirection: 'column !important' }}>
          <Stack justifyContent={title ? 'space-between' : 'flex-end'}>
            {title && (
              <DialogTitle variant="h5" fontWeight={600}>
                {title}
              </DialogTitle>
            )}
            {logo}
          </Stack>
          <DialogContent>{children}</DialogContent>
          {!hideActionsBtns && (
            <DialogActions data-testid="modal-actions">
              <Stack justifyContent="flex-end" gap={3} width="100%">
                {!disableEscapeKeyDown && (
                  <Button variant="outlined" size="medium" onClick={handleButtonClose}>
                    Bağla
                  </Button>
                )}
                <Button onClick={onClickSubmitButton} size="medium">
                  {submitText ?? 'Təsdiqlə'}
                </Button>
              </Stack>
            </DialogActions>
          )}
        </LoaderOverlay>
      </Dialog>
    </ThemeProvider>
  );
};
