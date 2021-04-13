import axios from 'axios';

axios.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const getUserPosts = (id) =>
  axios.get(`https://socialapp.server.elisv.com/posts/${id}`);

export const likePost = (id) =>
  axios.patch(`https://socialapp.server.elisv.com/posts/${id}/like`);

export const createPost = (post) =>
  axios.post('https://socialapp.server.elisv.com/posts', post);

export const getSinglePost = (userId, postId) =>
  axios.get(
    `https://socialapp.server.elisv.com/posts/${userId}/post/${postId}`
  );

export const getAllPosts = () =>
  axios.get('https://socialapp.server.elisv.com/posts');

export const search = (query) =>
  axios.get(`https://socialapp.server.elisv.com/search/${query}`);

export const deletePost = (id) =>
  axios.delete(`https://socialapp.server.elisv.com/posts/${id}`);
