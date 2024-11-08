import { createContext, type ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { useGetUserDetailsById } from 'src/api/login';
import { type IAuthToken, type IUserDetails } from 'src/api/login/types';

import { COMPANY_ID } from 'src/constants';
import { ROUTES } from 'src/routes/const';
import { getAccessToken } from 'src/utils';

interface IUserContext {
  company: string | null;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  user: IUserDetails | null;
}

const UserContext = createContext<IUserContext>({
  company: '',
  setCompany: () => {},
  user: null,
});

export default UserContext;

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const token = getAccessToken();
  const localCompany = localStorage.getItem(COMPANY_ID);
  const [user, setUser] = useState<IUserDetails | null>(null);
  const [company, setCompany] = useState(localCompany ?? '');
  if (!token) {
    return <Navigate to={ROUTES.AUTH.LOGIN.PATH} />;
  }

  const { sub } = jwtDecode<IAuthToken>(token);
  const { data: userDetails, isSuccess } = useGetUserDetailsById(sub);

  useEffect(() => {
    userDetails && setUser(userDetails);
  }, [isSuccess]);

  const contextData = {
    user,
    company,
    setCompany,
  };

  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};
