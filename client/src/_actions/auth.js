import * as API from '../api/auth';

export const signUp = (user, history, setUser) => async (dispatch) => {
  const { data } = await API.signUp(user);
  dispatch({ type: 'AUTH', payload: data });
  setUser(data);
  history.push(`/${data.result._id}`);
};

export const login = (creds, history, setUser) => async (dispatch) => {
  const { data } = await API.login(creds);
  dispatch({ type: 'AUTH', payload: data });
  setUser(data);
  history.push(`/${data.result._id}`);
};

export const logout = () => async (dispatch) => {
  const { data } = await API.logout();
  dispatch({ type: 'LOGOUT', payload: data });
};
