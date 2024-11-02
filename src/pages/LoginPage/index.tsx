import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useLoginMutation } from 'src/api/login';
import { type ILoginPayload } from 'src/api/login/types';
import { CustomFormProvider, CustomTextField, LoaderOverlay } from 'src/components';
import { ROUTES } from 'src/routes/const';
import { setAuthCookies } from 'src/utils';

import { validationSchema } from './validationSchema';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLoginMutation();
  const form = useForm<ILoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const _onSubmit = (data: ILoginPayload) => {
    mutate(data, {
      onSuccess: (data) => {
        setAuthCookies(data.access_token);
        navigate(ROUTES.DEFAULT.PATH);
      },
    });
  };

  return (
    <LoaderOverlay loading={isPending}>
      <CustomFormProvider form={form} onSubmit={_onSubmit}>
        <CustomTextField name="username" label="İstifadəçi adı" />
        <CustomTextField type="password" name="password" label="Şifrə" />
        <Button type="submit">Davam et</Button>
      </CustomFormProvider>
    </LoaderOverlay>
  );
};

export default LoginPage;
