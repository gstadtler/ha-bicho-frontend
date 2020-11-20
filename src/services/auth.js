export const TOKEN_KEY = null;
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const setCurrentUser = user => {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

export const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return user;
}

export const removeCurrentUser = () => {
  localStorage.removeItem('currentUser');
}

export const setUserRole = role => {
  localStorage.setItem('Role', role);
}

export const getUserRole = () => {
  const role = localStorage.getItem('Role');
  return role;
}

export const removeUserRole = () => {
  localStorage.removeItem('Role');
}

