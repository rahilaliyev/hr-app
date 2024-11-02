import Cookies from 'js-cookie';

const accessTokenName = 'accessToken';

export const getAccessToken = (): string | undefined => Cookies.get(accessTokenName);

export const removeAuthCookies = (): void => {
  Cookies.remove(accessTokenName, { path: '/login' });
};

export const setAuthCookies = (accessToken: string) => {
  Cookies.set(accessTokenName, accessToken, {
    expires: 3,
    sameSite: 'none',
    secure: true,
  });
};
