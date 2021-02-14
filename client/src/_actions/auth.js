import * as API from '../api/auth';

export const login = (creds) => async (dispatch) => {
  const { data } = await API.login(creds);
  dispatch({ type: 'AUTH', payload: data });
};

export const logout = () => async (dispatch) => {
  const { data } = await API.logout();
  dispatch({ type: 'LOGOUT', payload: data });
};
