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

export const getSingleUserPost = (userId, postId) => async (dispatch) => {
  const { data } = await API.getSinglePost(userId, postId);
  dispatch({ type: 'GET_SINGLE_POST', payload: data });
};

export const getAllPosts = () => async (dispatch) => {
  const { data } = await API.getAllPosts();
  console.log(data);
  dispatch({ type: 'GET_ALL_POSTS', payload: data });
};
