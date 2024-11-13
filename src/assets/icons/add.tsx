import { type IconProps } from 'src/ts/interface';

export const AddIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 12H18" stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18V6" stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
