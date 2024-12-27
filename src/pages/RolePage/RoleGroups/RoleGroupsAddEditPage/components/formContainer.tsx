import { useContext, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import UserContext from 'src/context/userContext';

import {
  useCreateRoleGroup,
  useGetCompanies,
  useGetRoleGroupDetails,
  useGetRoles,
  useUpdateRoleGroup,
} from 'src/api';

import { Box, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { CustomFormProvider, CustomTextField, LoaderOverlay, SelectField } from 'src/components';

import { useDefaultValues } from './useDefaultValues';
import { type TFormValues, validationSchema } from './validationSchema';

const FormContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { company } = useContext(UserContext);
  const { data, isLoading: isDataLoading } = useGetRoleGroupDetails(id ?? '');
  const { data: companies, isLoading: isCompLoading, isSuccess: isCompSuccess } = useGetCompanies(0);
  const { data: roles, isLoading: isRoleLoading, isSuccess: isRoleSuccess } = useGetRoles();
  const { mutate: createRoleGroupMutation, isPending: isCreateLoading } = useCreateRoleGroup();
  const { mutate: updateRoleGroupMutation, isPending: isUpdateLoading } = useUpdateRoleGroup();
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

  const roleOptions = useMemo(() => {
    if (isRoleSuccess) {
      return roles.map((role) => ({ value: role.id.toString(), label: role.name }));
    }
  }, [isRoleSuccess, roles]);

  useEffect(() => {
    if (isCompSuccess && company) {
      formBag.setValue('companyId', company.toString());
    }
  }, [isCompSuccess, company, formBag]);

  useEffect(() => {
    formBag.reset(defaultValues);
  }, [defaultValues, formBag.reset, formBag]);

  const onSubmit = ({ name, nameCode, companyId, roles }: TFormValues) => {
    const payloadData = {
      name: `${name}-${nameCode}`,
      company_id: companyId,
      roles: roles.map((id) => Number(id)),
    };

    !id ? createRoleGroupMutation(payloadData) : updateRoleGroupMutation({ id, body: payloadData });
  };

  const isLoading = isDataLoading || isCreateLoading || isUpdateLoading;

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
            <Grid size={12}>
              <SelectField
                multiple
                name="roles"
                label="Rollar"
                items={roleOptions ?? []}
                loading={isRoleLoading}
              />
            </Grid>
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
