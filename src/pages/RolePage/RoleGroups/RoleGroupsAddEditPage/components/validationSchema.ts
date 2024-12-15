import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Məcburi xana'),
  nameCode: Yup.string(),
  companyId: Yup.string().required('Məcburi xana'),
  roles: Yup.array().min(1, 'Ən azı bir rol seçilməlidir').required('Məcburi xana'),
});

export type TFormValues = Yup.InferType<typeof validationSchema>;
