import axios from 'axios';

axios.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const createComment = (data) =>
  axios.post('http://localhost:8000/comments/createcomment', data);
export const getComments = (postId) =>
  axios.post('http://localhost:8000/comments/getcomments', postId);
