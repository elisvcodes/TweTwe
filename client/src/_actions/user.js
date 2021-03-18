import * as API from '../api/user';

export const signUp = (user) => async (dispatch) => {
  const { data } = await API.signUp(user);
  dispatch({ type: 'SIGNUP', payload: data });
};

export const logout = () => async (dispatch) => {
  await API.logout();
  dispatch({ type: 'LOGOUT' });
};

export const getUserPosts = (id) => async (dispatch) => {
  const { data } = await API.getUserPosts(id);
  dispatch({ type: 'GET_USER_POSTS', payload: data });
};

export const likePost = (id) => async (dispatch) => {
  const { data } = await API.likePost(id);
  dispatch({ type: 'LIKEPOST', payload: data });
};

export const createPost = (post) => async (dispatch) => {
  const { data } = await API.createPost(post);
  dispatch({ type: 'CREATE_POST', payload: data });
};

export const getFollowerCount = () => async () => {
  const { data } = await API.followerCount();
  console.log(data);
};

export const getFollowingCount = () => async () => {
  const { data } = await API.followingCount();
  console.log(data);
};
