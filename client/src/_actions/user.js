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

export const getFollowerCount = (follower) => async (dispatch) => {
  const { data } = await API.followerCount(follower);
  dispatch({ type: 'GET_FOLLOWER_COUNT', payload: data });
};

export const getFollowingCount = (following) => async (dispatch) => {
  const { data } = await API.followingCount(following);
  dispatch({ type: 'GET_FOLLOWING_COUNT', payload: data });
};
