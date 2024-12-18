import { type IconProps } from 'src/ts/interface';

export const CautionFillIcon = ({ pathFill = '#1D2939', ...props }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C15.5191 0 20 4.48093 20 10C20 15.5191 15.5191 20 10 20C4.48093 20 0 15.5191 0 10C0 4.48093 4.48093 0 10 0ZM8.83721 5.93023L9.30233 11.5116C9.30233 11.8967 9.61488 12.2093 10 12.2093C10.3851 12.2093 10.6977 11.8967 10.6977 11.5116L11.1628 5.93023C11.1628 5.54512 10.9302 4.76744 10 4.76744C9.06977 4.76744 8.83721 5.54512 8.83721 5.93023ZM10 13.3721C9.48651 13.3721 9.06977 13.7888 9.06977 14.3023C9.06977 14.8158 9.48651 15.2326 10 15.2326C10.5135 15.2326 10.9302 14.8158 10.9302 14.3023C10.9302 13.7888 10.5135 13.3721 10 13.3721Z"
        fill={pathFill}
      />
    </svg>
  );
};
