import * as API from '../api/auth';

export const signUp = (user) => async (dispatch) => {
  const { data } = await API.signUp(user);
  dispatch({ type: 'SIGNUP', payload: data });
};

export const login = (creds) => async (dispatch) => {
  const { data } = await API.login(creds);
  dispatch({ type: 'AUTH', payload: data });
};

export const logout = () => async (dispatch) => {
  const { data } = await API.logout();
  dispatch({ type: 'LOGOUT', payload: data });
};
