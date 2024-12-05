import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import UserContext from 'src/context/userContext';

import { useCreateCompany, useGetCompanyDetails, useGetServiceOptions, useUpdateCompany } from 'src/api';
import { type IUpdateCompanyPayload } from 'src/api/companies/types';

import { Box, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { CustomFormProvider, CustomTextField, LoaderOverlay, SelectField } from 'src/components';

import { useDefaultValues } from './useDefaultValues';
import { type TFormValues, validationSchema } from './validationSchema';

const FormContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { data, isPending: isDataLoading } = useGetCompanyDetails(id ?? '');
  const { data: options, isPending: isOptionLoading } = useGetServiceOptions();
  const { mutate: createMutation, isPending: isCreateLoading } = useCreateCompany();
  const { mutate: updateMutation, isPending: isUpdateLoading } = useUpdateCompany();
  const defaultValues = useDefaultValues(data);

  const formBag = useForm<TFormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    formBag.reset(defaultValues);
  }, [defaultValues, formBag.reset]);

  //   useEffect(() => {
  //     const handleErrorScroll = (errors: any) => {
  //       // eslint-disable-next-line
  //       const firstErrorKey = Object.keys(errors)[0];
  //       const errorElement = document.querySelector(`[name="${firstErrorKey}"]`);

  //       if (errorElement) {
  //         errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //       }
  //     };

  //     if (Object.keys(formBag.formState.errors).length > 0) {
  //       handleErrorScroll(formBag.formState.errors);
  //     }
  //   }, [formBag.formState.errors]);

  const onSubmit = (values: TFormValues) => {
    if (!id) {
      createMutation(values);
    } else {
      const updatedData: IUpdateCompanyPayload = {
        id,
        body: {
          ...values,
          update_user_id: user?.id,
        },
      };
      updateMutation(updatedData);
    }
  };

  const isLoading = isCreateLoading || isUpdateLoading || isDataLoading;

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Box width="67%">
        <CustomFormProvider form={formBag} onSubmit={onSubmit}>
          <Grid container spacing={5} height="100%">
            <Grid size={6}>
              <CustomTextField defaultValue="" name="name" label="Şirkətin adı" />
            </Grid>
            <Grid size={6}>
              <CustomTextField
                defaultValue=""
                name="voen"
                label="VÖEN"
                slotProps={{ input: { type: 'number' } }}
              />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="sun" label="SUN" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="bank_name" label="Bank adı" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="bank_filial" label="Filial" />
            </Grid>
            <Grid size={6}>
              <CustomTextField
                defaultValue=""
                name="bank_voen"
                label="Bank VÖEN"
                slotProps={{ input: { type: 'number' } }}
              />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="cor_account" label="Müxbir hesab" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="azn_account" label="AZN Hesab" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="usd_account" label="USD Hesab" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="eur_account" label="EUR Hesab" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="country" label="Ölkə" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="city" label="Şəhər" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="poct_index" label="Poçt indeksi" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="tel" type="tel" label="Telefon" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="enterprise_head_fullname" label="Rəhbərin S.A.A" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="enterprise_head_position" label="Rəhbərin vəzifəsi" />
            </Grid>
            <Grid size={6}>
              <SelectField
                defaultValue=""
                name="service_id"
                label="Servis xidməti"
                items={options ?? []}
                loading={isOptionLoading}
              />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="kod" label="Kod" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="swift" label="S.W.İ.F.T" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="address" label="Ünvan" />
            </Grid>
            <Grid size={6}>
              <CustomTextField defaultValue="" name="founder" label="Təsisçi" />
            </Grid>
            <Grid size={12}>
              <Stack justifyContent="flex-end" gap={4}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Ləğv et
                </Button>
                <Button disabled={!formBag.formState.isDirty} type="submit">
                  Təsdiqlə
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CustomFormProvider>
      </Box>
    </LoaderOverlay>
  );
};

export default FormContainer;
