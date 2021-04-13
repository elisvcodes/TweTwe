import axios from 'axios';

axios.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const getSingleUser = (id) =>
  axios.get(`https://socialapp.server.elisv.com/users/${id}`);
export const followingCount = (following) =>
  axios.post(
    'https://socialapp.server.elisv.com/follow/followingcount',
    following
  );
export const followerCount = (follower) =>
  axios.post(
    'https://socialapp.server.elisv.com/follow/followercount',
    follower
  );
export const follow = (userIds) =>
  axios.post('https://socialapp.server.elisv.com/follow', userIds);
export const unfollow = (userIds) =>
  axios.post('https://socialapp.server.elisv.com/follow/unfollow', userIds);
export const following = (userIds) =>
  axios.post('https://socialapp.server.elisv.com/follow/following', userIds);
