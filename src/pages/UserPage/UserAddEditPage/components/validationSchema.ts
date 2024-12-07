import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  id: Yup.string(),
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]*$/, 'Yalnız hərf və rəqəm olmalıdır')
    .required('Məcburi xana'),
  userCheck: Yup.boolean(),
  employee_id: Yup.string().when('userCheck', {
    is: (userCheck: boolean) => userCheck,
    then: (schema) => schema.required('Məcburi xana'),
  }),
  language_id: Yup.string().required('Məcburi xana'),
  role_groups: Yup.array().required('Məcburi xana').min(1, 'Məcburi xana'),
  password: Yup.string().when('id', {
    is: (id: boolean) => !id,
    then: (schema) => schema.min(8, 'Minimum 8 simvol olmalıdır').required('Məcburi xana'),
  }),
  password_confirmation: Yup.string().when('id', {
    is: (id: boolean) => !id,
    then: (schema) =>
      schema
        .min(8, 'Minimum 8 simvol olmalıdır')
        .oneOf([Yup.ref('password')], 'Şifrələr uyğun deyil')
        .required('Məcburi xana'),
  }),
  companies: Yup.array().required('Məcburi xana').min(1, 'Məcburi xana'),
  firstname: Yup.string().when('userCheck', {
    is: (userCheck: boolean) => !userCheck,
    then: (schema) => schema.required('Məcburi xana'),
  }),
  lastname: Yup.string().when('userCheck', {
    is: (userCheck: boolean) => !userCheck,
    then: (schema) => schema.required('Məcburi xana'),
  }),
  email: Yup.string().when('userCheck', {
    is: (userCheck: boolean) => !userCheck,
    then: (schema) => schema.email('Düzgün olmayan e-poçt formatı').required('Məcburi xana'),
  }),
});

export type TFormValues = Yup.InferType<typeof validationSchema>;
