import { useEffect } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';

import { type UseFormHandlersProps } from 'src/components/form/types';

export const useFormHandlers = <T extends FieldValues, C>(props: UseFormHandlersProps<T, C>) => {
  const { form, onSubmit, initialValues, ...rest } = props;

  const submitHandler = () => {
    const onValidSubmit: SubmitHandler<T> = (data) => {
      onSubmit(data);
    };

    return form.handleSubmit(onValidSubmit);
  };

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues, {
        keepDirtyValues: true,
      });
    }
  }, [initialValues]);

  return {
    onSubmit: submitHandler as SubmitHandler<T>,
    form,
    ...rest,
  };
};
