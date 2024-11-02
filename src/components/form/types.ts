import type { FieldValues, UseFormReturn } from 'react-hook-form';

import { useFormHandlers } from 'src/hooks';

export interface UseFormHandlersProps<TFieldValues extends FieldValues, C> {
  form: UseFormReturn<TFieldValues, C>;
  initialValues?: TFieldValues;
  onSubmit: (data: TFieldValues) => void;
}

class Wrapper<T extends FieldValues, C> {
  mediate = (props: UseFormHandlersProps<T, C>) => useFormHandlers<T, C>(props);
}

export type GenericFormHandlersReturnType<T extends FieldValues, C> = ReturnType<Wrapper<T, C>['mediate']>;
