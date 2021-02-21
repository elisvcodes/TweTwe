import axios from 'axios';

axios.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

// const API = axios.create({ baseURL: 'http://localhost:8000' });

export const signUp = (data) => axios.post(`http://localhost:8000/users`, data);
export const getUserPosts = (id) =>
  axios.get(`http://localhost:8000/posts/${id}`);
export const likePost = (id) =>
  axios.patch(`http://localhost:8000/posts/${id}/like`);
export const createPost = (post) =>
  axios.post('http://localhost:8000/posts', post);
