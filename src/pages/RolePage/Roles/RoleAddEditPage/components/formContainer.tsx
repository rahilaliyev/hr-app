import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import UserContext from 'src/context/userContext';

import { useCreateRole, useGetCompanies, useGetModelInfos, useGetRoleDetails, useUpdateRole } from 'src/api';

import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { CustomFormProvider, CustomTextField, LoaderOverlay, SelectField } from 'src/components';

import RoleTable from './roleTable';
import { useDefaultValues } from './useDefaultValues';
import { type TFormValues, validationSchema } from './validationSchema';

const FormContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { company } = useContext(UserContext);
  const { data, isLoading: isDataLoading } = useGetRoleDetails(id ?? '');
  const { isLoading: isModelLoading } = useGetModelInfos();
  const { data: companies, isLoading: isCompLoading, isSuccess: isCompSuccess } = useGetCompanies(0);
  const { mutate: createRoleMutation, isPending: isCreateLoading } = useCreateRole();
  const { mutate: updateRoleMutation, isPending: isUpdateLoading } = useUpdateRole();
  const [checkedValues, setCheckedValues] = useState<number[]>([]);
  const defaultValues = useDefaultValues(data, company);

  const formBag = useForm<TFormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const companyOptions = useMemo(() => {
    if (isCompSuccess) {
      return companies.data.map((cmp) => ({ value: cmp.id.toString(), label: cmp.name }));
    }
  }, [isCompSuccess, companies?.data]);

  useEffect(() => {
    if (isCompSuccess && company) {
      formBag.setValue('companyId', company.toString());
    }
  }, [isCompSuccess, company, formBag]);

  useEffect(() => {
    formBag.setValue('permissions', checkedValues, {
      shouldDirty: true,
      shouldValidate: !!formBag.formState.isSubmitted,
    });
  }, [checkedValues, formBag]);

  useEffect(() => {
    formBag.reset(defaultValues);
  }, [defaultValues, formBag.reset, formBag]);

  useEffect(() => {
    const permissions = data?.permissions?.flatMap((el) => el.id);

    if (permissions?.length) {
      setCheckedValues(permissions);
    }
  }, [data]);

  const onSubmit = ({ name, nameCode, companyId, permissions }: TFormValues) => {
    const payloadData = {
      name: `${name}-${nameCode}`,
      company_id: companyId,
      permissions,
    };

    !id ? createRoleMutation(payloadData) : updateRoleMutation({ id, body: payloadData });
  };

  const isLoading = isCreateLoading || isDataLoading || isModelLoading || isUpdateLoading;

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Box width="67%">
        <CustomFormProvider form={formBag} onSubmit={onSubmit}>
          <Grid container spacing={5} height="100%">
            <Grid size={6}>
              <SelectField
                defaultValue=""
                disabled
                name="companyId"
                label="Şirkət"
                items={companyOptions ?? []}
                loading={isCompLoading}
              />
            </Grid>
            <Grid size={6}>
              <Stack alignItems="flex-end" gap={5}>
                <CustomTextField defaultValue="" name="name" label="Rolun adı" />
                <Stack height={45}> - </Stack>
                <CustomTextField name="nameCode" sx={{ maxWidth: 70 }} defaultValue="" disabled />
              </Stack>
            </Grid>
            <RoleTable checkedValues={checkedValues} setCheckedValues={setCheckedValues} />
            {formBag.formState?.errors?.permissions?.message && (
              <Typography color="error" variant="caption">
                {formBag.formState?.errors?.permissions?.message}
              </Typography>
            )}
          </Grid>
          <Grid size={12}>
            <Stack justifyContent="flex-end" mt={5} gap={4}>
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
        </CustomFormProvider>
      </Box>
    </LoaderOverlay>
  );
};

export default FormContainer;
