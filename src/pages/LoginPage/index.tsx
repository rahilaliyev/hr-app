import { type KeyboardEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { enqueueSnackbar } from 'notistack';

import { useLoginMutation } from 'src/api';
import { type ILoginPayload } from 'src/api/login/types';

import { Button, Typography } from '@mui/material';

import { CustomFormProvider, CustomTextField, LoaderOverlay } from 'src/components';

import { validationSchema } from './validationSchema';

import { ROUTES } from 'src/routes/const';
import { setAuthCookies } from 'src/utils';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLoginMutation();
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const form = useForm<ILoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (isCapsLockOn && isPasswordFocused) {
      enqueueSnackbar({ message: 'Caps Lock açıqdır', variant: 'warning' });
    }
  }, [isCapsLockOn, isPasswordFocused]);

  const _onSubmit = (data: ILoginPayload) => {
    mutate(data, {
      onSuccess: (data) => {
        setAuthCookies(data.access_token);
        navigate(ROUTES.DEFAULT.PATH);
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.getModifierState('CapsLock')) {
      setIsCapsLockOn(true);
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!e.getModifierState('CapsLock')) {
      setIsCapsLockOn(false);
    }
  };

  return (
    <LoaderOverlay loading={isPending}>
      <CustomFormProvider form={form} onSubmit={_onSubmit}>
        <Typography variant="h5" textAlign="center" mb={11}>
          Daxil olun
        </Typography>
        <CustomTextField name="username" label="İstifadəçi adı" />
        <CustomTextField
          type="password"
          name="password"
          label="Şifrə"
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onFocus={() => {
            setIsPasswordFocused(true);
          }}
          onBlur={() => {
            setIsCapsLockOn(false);
            setIsPasswordFocused(false);
          }}
        />
        <Typography marginBottom={2} variant="subtitle2" component="p" textAlign="right">
          <Link to={ROUTES.AUTH.FORGOT_PASSWORD.PATH}>Şifrəni unutmusunuz?</Link>
        </Typography>
        <Button fullWidth type="submit">
          Davam et
        </Button>
      </CustomFormProvider>
    </LoaderOverlay>
  );
};

export default LoginPage;
