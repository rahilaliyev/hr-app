import { useNavigate } from 'react-router-dom';

import { IconButton, Tooltip } from '@mui/material';

import { LeftArrowIcon } from 'src/assets/icons';

export const GoBackButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <Tooltip title="Geriyə qayıt">
      <IconButton onClick={handleNavigate}>
        <LeftArrowIcon />
      </IconButton>
    </Tooltip>
  );
};
