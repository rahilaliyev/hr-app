import { type IconProps } from 'src/ts/interface';

export const LeftArrowIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 11.25H4.8105L11.0303 5.03026C11.3233 4.73719 11.3233 4.26263 11.0303 3.96976C10.7372 3.67688 10.2626 3.67669 9.96975 3.96976L2.46975 11.4698C2.17669 11.7628 2.17669 12.2374 2.46975 12.5303L9.96975 20.0303C10.1162 20.1767 10.3082 20.25 10.5 20.25C10.6918 20.25 10.8838 20.1767 11.0303 20.0303C11.3233 19.7372 11.3233 19.2626 11.0303 18.9698L4.8105 12.75H21C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25Z"
        fill="#1D2939"
      />
    </svg>
  );
};
