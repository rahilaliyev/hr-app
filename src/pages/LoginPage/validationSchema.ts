import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  password: Yup.string().required('Məcburi xana'),
  username: Yup.string().required('Məcburi xana'),
});
