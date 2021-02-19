import * as API from '../api/user';

export const signUp = (user) => async (dispatch) => {
  const { data } = await API.signUp(user);
  dispatch({ type: 'SIGNUP', payload: data });
};

export const getUserPosts = (id) => async (dispatch) => {
  const { data } = await API.getUserPosts(id);
  dispatch({ type: 'GET_USER_POSTS', payload: data });
};

export const likePost = (id) => async (dispatch) => {
  const { data } = await API.likePost(id);
  console.log(data);
  dispatch({ type: 'LIKEPOST', payload: data });
};
