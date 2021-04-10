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
  axios.get(`http://localhost:8000/posts/${id}`);

export const likePost = (id) =>
  axios.patch(`http://localhost:8000/posts/${id}/like`);

export const createPost = (post) =>
  axios.post('http://localhost:8000/posts', post);

export const getSinglePost = (userId, postId) =>
  axios.get(`http://localhost:8000/posts/${userId}/post/${postId}`);

export const getAllPosts = () => axios.get('http://localhost:8000/posts');

export const search = (query) =>
  axios.get(`http://localhost:8000/search/${query}`);
