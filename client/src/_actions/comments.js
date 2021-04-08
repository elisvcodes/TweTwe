import * as API from '../api/comments';

export const createComment = (commentData) => async (dispatch) => {
  const { data } = await API.createComment(commentData);
  dispatch({ type: 'CREATE_COMMENT', payload: data });
};
export const getComments = (postId) => async (dispatch) => {
  const { data } = await API.getComments(postId);
  dispatch({ type: 'GET_COMMENTS', payload: data });
};
