import { createContext, type ReactNode, useState } from 'react';

import { type IUserDetails } from 'src/api/login/types';

import { COMPANY_ID } from 'src/constants';

interface IUserContext {
  company: string | null;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  user: IUserDetails | null;
  setUser: React.Dispatch<React.SetStateAction<IUserDetails | null>>;
}

const UserContext = createContext<IUserContext>({
  company: '',
  setCompany: () => {},
  setUser: () => {},
  user: null,
});

export default UserContext;

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const localCompany = localStorage.getItem(COMPANY_ID);
  const [user, setUser] = useState<IUserDetails | null>(null);
  const [company, setCompany] = useState(localCompany ?? '');

  const contextData = {
    user,
    company,
    setUser,
    setCompany,
  };

  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};
