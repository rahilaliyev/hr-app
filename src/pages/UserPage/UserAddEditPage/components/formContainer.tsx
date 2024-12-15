import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  useCreateUser,
  useGetCompanies,
  useGetEmployees,
  useGetLanguages,
  useGetRoleGroups,
  useGetUserDetails,
  useUpdateUser,
} from 'src/api';

import { Box, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { CustomFormProvider, CustomTextField, LoaderOverlay, SelectField } from 'src/components';

import { useDefaultValues } from './useDefaultValues';
import { type TFormValues, validationSchema } from './validationSchema';

const FormContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { mutate: createMutation, isPending: isCreateLoading } = useCreateUser();
  const { mutate: updateMutation, isPending: isUpdateLoading } = useUpdateUser();
  const { data, isLoading: isDataLoading } = useGetUserDetails(id ?? '');
  const { data: employees, isLoading: isEmployeeLoading, isSuccess: isEmployeeSuccess } = useGetEmployees();
  const { data: languages, isLoading: isLangLoading, isSuccess: isLangSuccess } = useGetLanguages();
  const { data: companies, isLoading: isCompLoading, isSuccess: isCompSuccess } = useGetCompanies(0);
  const {
    data: roleGroups,
    isLoading: isRoleGroupsLoading,
    isSuccess: isRoleGroupsSuccess,
  } = useGetRoleGroups();
  const defaultValues = useDefaultValues(data);

  const employeeOptions = useMemo(() => {
    if (isEmployeeSuccess) {
      return employees.map((emp) => ({
        value: emp.id.toString(),
        label: `${emp.firstname} ${emp?.lastname}`,
      }));
    }
  }, [employees, isEmployeeSuccess]);

  const roleGroupOptions = useMemo(() => {
    if (isRoleGroupsSuccess) {
      return roleGroups.map((role) => ({ value: role.id, label: role.name }));
    }
  }, [roleGroups, isRoleGroupsSuccess]);

  const langOptions = useMemo(() => {
    if (isLangSuccess) {
      return languages.map((lng) => ({ value: lng.id.toString(), label: lng.name }));
    }
  }, [languages, isLangSuccess]);

  const companyOptions = useMemo(() => {
    if (isCompSuccess) {
      return companies.data.map((cmp) => ({ value: cmp.id, label: cmp.name }));
    }
  }, [companies?.data, isCompSuccess]);

  const formBag = useForm<TFormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const employeeIdWatching = formBag.watch('employee_id');

  useEffect(() => {
    formBag.reset(defaultValues);
  }, [formBag, defaultValues, formBag.reset]);

  useEffect(() => {
    if (employeeIdWatching) {
      formBag.setValue('userCheck', true);
    } else {
      formBag.setValue('userCheck', false);
    }
  }, [employeeIdWatching, formBag]);

  const onSubmit = (values: TFormValues) => {
    const { companies, password, username, firstname, lastname, email, userCheck } = values;
    const data = {
      companies,
      language_id: values.language_id,
      role_groups: values.role_groups,
      username,
      ...(!id ? { password, password_confirmation: values.password_confirmation } : {}),
      ...(userCheck ? { employee_id: values.employee_id } : {}),
      ...(!userCheck ? { firstname, lastname, email } : {}),
    };

    if (!id) {
      createMutation(data);
    } else {
      updateMutation({ id, body: data });
    }
  };

  const isLoading = isDataLoading || isCreateLoading || isUpdateLoading;

  return (
    <LoaderOverlay loading={isLoading} size={30}>
      <Box width="67%">
        <CustomFormProvider form={formBag} onSubmit={onSubmit}>
          <Grid container spacing={5} height="100%">
            <Grid size={6}>
              <CustomTextField defaultValue="" name="username" label="İstifadəçi adı" />
            </Grid>
            <Grid size={6}>
              <SelectField
                defaultValue=""
                name="employee_id"
                label="İşçi"
                items={employeeOptions ?? []}
                loading={isEmployeeLoading}
                defaultValueDisable={false}
              />
            </Grid>
            <Grid size={6}>
              <SelectField
                defaultValue=""
                name="role_groups"
                label="Rol qruplar"
                items={roleGroupOptions ?? []}
                loading={isRoleGroupsLoading}
                multiple
              />
            </Grid>
            {!id && (
              <>
                <Grid size={6}>
                  <CustomTextField defaultValue="" type="password" name="password" label="Şifrə" />
                </Grid>
                <Grid size={6}>
                  <CustomTextField
                    defaultValue=""
                    type="password"
                    name="password_confirmation"
                    label="Təkrar şifrə"
                  />
                </Grid>
              </>
            )}
            {!employeeIdWatching && (
              <>
                <Grid size={6}>
                  <CustomTextField defaultValue="" name="firstname" label="Ad" />
                </Grid>
                <Grid size={6}>
                  <CustomTextField defaultValue="" name="lastname" label="Soyad" />
                </Grid>
                <Grid size={6}>
                  <CustomTextField defaultValue="" name="email" label="E-poçt" />
                </Grid>
              </>
            )}
            <Grid size={6}>
              <SelectField
                defaultValue=""
                name="language_id"
                label="Proqramın dili"
                items={langOptions ?? []}
                loading={isLangLoading}
              />
            </Grid>
            <Grid size={6}>
              <SelectField
                defaultValue=""
                name="companies"
                label="İş yeri"
                items={companyOptions ?? []}
                loading={isCompLoading}
                multiple
              />
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
