import { ROUTES } from 'src/routes/const';

import { CategoryIcon, EmployeeIcon, UserIcon } from 'src/assets/icons';

interface IMenuItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const useMenuItems = () => {
  const menuItems: IMenuItem[] = [
    {
      href: ROUTES.USERS.PATH,
      label: 'İstifadəçilər',
      icon: <UserIcon />,
    },
    {
      href: ROUTES.COMPANIES.PATH,
      label: 'Şirkətlər',
      icon: <CategoryIcon />,
    },
    {
      href: ROUTES.EMPLOYEES.PATH,
      label: 'İşçilər',
      icon: <EmployeeIcon />,
    },
  ];

  return menuItems;
};
