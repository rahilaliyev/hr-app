import React from 'react';
import { type FieldValues, FormProvider } from 'react-hook-form';

import { type GenericFormHandlersReturnType } from './types';

export interface FormProps<T extends FieldValues, C> extends GenericFormHandlersReturnType<T, C> {
  children: React.ReactNode;
  novalidate?: boolean;
  isDisabled?: boolean;
}

export const CustomFormProvider = <T extends FieldValues, C>(props: FormProps<T, C>) => {
  const { form, onSubmit, isDisabled = false, children, novalidate = false } = props;

  const isDev = import.meta.env.MODE === 'development';
  const errors = form.formState.errors;

  if (isDev && Object.keys(errors).length > 0) {
    console.warn('ERRORS', form.formState.errors);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        style={{
          pointerEvents: isDisabled ? 'none' : 'auto',
          minHeight: 'inherit',
        }}
        noValidate={novalidate}
      >
        <fieldset
          disabled={isDisabled}
          style={{
            minHeight: 'inherit',
            border: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
