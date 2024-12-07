import { useTheme } from '@mui/material';

import { ROUTES } from 'src/routes/const';

import { CategoryIcon, EmployeeIcon, UserIcon } from 'src/assets/icons';

interface IMenuItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const useMenuItems = () => {
  const theme = useTheme();
  const menuItems: IMenuItem[] = [
    {
      href: ROUTES.USERS.PATH,
      label: 'İstifadəçilər',
      icon: <UserIcon pathFill={theme.palette.grey[500]} />,
    },
    {
      href: ROUTES.COMPANIES.PATH,
      label: 'Şirkətlər',
      icon: <CategoryIcon pathFill={theme.palette.grey[500]} />,
    },
    {
      href: ROUTES.EMPLOYEES.PATH,
      label: 'İşçilər',
      icon: <EmployeeIcon pathFill={theme.palette.grey[500]} />,
    },
  ];

  return menuItems;
};
