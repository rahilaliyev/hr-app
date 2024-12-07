import { useSnackbar, type VariantType } from 'notistack';

interface NotificationOptions {
  title: string;
  variant: VariantType;
}

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = ({ title, variant }: NotificationOptions) => {
    if (!title || !variant) return;

    enqueueSnackbar(title, { variant });
  };

  return { showNotification };
};

export default useNotification;
