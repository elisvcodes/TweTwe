import * as API from '../api/user';

export const getSingleUser = (id) => async (dispatch) => {
  const { data } = await API.getSingleUser(id);
  dispatch({ type: 'GET_SINGLE_USER', payload: data });
};

export const getFollowerCount = (follower) => async (dispatch) => {
  const { data } = await API.followerCount(follower);
  dispatch({ type: 'GET_FOLLOWER_COUNT', payload: data });
};

export const getFollowingCount = (following) => async (dispatch) => {
  const { data } = await API.followingCount(following);
  dispatch({ type: 'GET_FOLLOWING_COUNT', payload: data });
};

export const follow = (userIds) => async (dispatch) => {
  await API.follow(userIds);
  dispatch({ type: 'ADD_FOLLOWER' });
};

export const unfollow = (userIds) => async (dispatch) => {
  await API.unfollow(userIds);
  dispatch({ type: 'REMOVE_FOLLOWER' });
};

export const following = (userIds) => async (dispatch) => {
  const { data } = await API.following(userIds);
  dispatch({ type: 'FOLLOWING', payload: data });
};
