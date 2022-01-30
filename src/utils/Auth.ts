const TOKEN_NAME = 'login_token';

const getToken = () => localStorage.getItem(TOKEN_NAME);

export const isAuth = () => !!getToken()



