import { ROUTES } from 'src/routes/const';

import { CategoryIcon, EmployeeIcon } from 'src/assets/icons';

interface IMenuItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const useMenuItems = () => {
  const menuItems: IMenuItem[] = [
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
