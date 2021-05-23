import api from './api';

export const signInService = async ({ username, password }) => {
  const session = { username, password };
  const { data } = await api.post('sessions', { session });

  return data;
};

export const signUpService = async ({ name, username, password }) => {
  const user = { name, username, password };
  const { data } = await api.post('users', { user });

  return data;
};
