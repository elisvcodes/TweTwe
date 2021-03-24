import * as API from '../api/posts';

export const createPost = (post) => async (dispatch) => {
  const { data } = await API.createPost(post);
  dispatch({ type: 'CREATE_POST', payload: data });
};

export const likePost = (id) => async (dispatch) => {
  const { data } = await API.likePost(id);
  dispatch({ type: 'LIKEPOST', payload: data });
};

export const getUserPosts = (id) => async (dispatch) => {
  const { data } = await API.getUserPosts(id);
  dispatch({ type: 'GET_USER_POSTS', payload: data });
};
