import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import posts from './posts';
import follow from './follow';
import post from './singlePost';
import comments from './comments';
export default combineReducers({
  auth,
  user,
  posts,
  follow,
  post,
  comments,
});
