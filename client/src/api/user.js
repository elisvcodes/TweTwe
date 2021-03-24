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
  axios.get(`http://localhost:8000/users/${id}`);
export const followingCount = (following) =>
  axios.post('http://localhost:8000/follow/followingcount', following);
export const followerCount = (follower) =>
  axios.post('http://localhost:8000/follow/followercount', follower);
export const follow = (userIds) =>
  axios.post('http://localhost:8000/follow', userIds);
export const unfollow = (userIds) =>
  axios.post('http://localhost:8000/follow/unfollow', userIds);
export const following = (userIds) =>
  axios.post('http://localhost:8000/follow/following', userIds);
