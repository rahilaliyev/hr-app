import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Məcburi xana'),
  voen: Yup.string().min(4, 'Minimum simvol sayı').max(10, 'Maksimum simvol sayı').required('Məcburi xana'),
  sun: Yup.string().required('Məcburi xana'),
  bank_name: Yup.string().required('Məcburi xana'),
  bank_filial: Yup.string().required('Məcburi xana'),
  kod: Yup.string().required('Məcburi xana'),
  bank_voen: Yup.string()
    .min(4, 'Minimum simvol sayı')
    .max(10, 'Maksimum simvol sayı')
    .required('Məcburi xana'),
  cor_account: Yup.string().required('Məcburi xana'),
  swift: Yup.string().required('Məcburi xana'),
  azn_account: Yup.string().required('Məcburi xana'),
  usd_account: Yup.string().required('Məcburi xana'),
  eur_account: Yup.string().required('Məcburi xana'),
  country: Yup.string().required('Məcburi xana'),
  city: Yup.string().required('Məcburi xana'),
  address: Yup.string().required('Məcburi xana'),
  poct_index: Yup.string().required('Məcburi xana'),
  tel: Yup.string().required('Məcburi xana'),
  enterprise_head_fullname: Yup.string().required('Məcburi xana'),
  enterprise_head_position: Yup.string().required('Məcburi xana'),
  founder: Yup.string().required('Məcburi xana'),
  service_id: Yup.string().required('Məcburi xana'),
});

export type TFormValues = Yup.InferType<typeof validationSchema>;
