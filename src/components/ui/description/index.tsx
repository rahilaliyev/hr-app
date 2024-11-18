import { Box, Typography } from '@mui/material';

import { StyledContentBox, StyledLabelBox } from './Description.styled';
import { type IDescriptionProps } from './Description.types';
import { DescriptionContainer } from './DescriptionContainer';

const Description = ({ label, content, orientation = 'vertical' }: IDescriptionProps) => {
  const horizontal = () => {
    return (
      <Box data-testid="horizontally">
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">{content ?? '-'}</Typography>
      </Box>
    );
  };

  const vertical = () => {
    return (
      <tbody>
        <tr>
          <td>
            <StyledLabelBox>{label}</StyledLabelBox>
          </td>
          <td>
            <StyledContentBox>{content ?? '-'}</StyledContentBox>
          </td>
        </tr>
      </tbody>
    );
  };

  return orientation === 'horziontal' ? horizontal() : vertical();
};

export { Description, DescriptionContainer };
