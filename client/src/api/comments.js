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
  axios.post('https://socialapp.server.elisv.com/comments/createcomment', data);
export const getComments = (postId) =>
  axios.post('https://socialapp.server.elisv.com/comments/getcomments', postId);
