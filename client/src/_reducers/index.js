import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import posts from './posts';
export default combineReducers({
  auth,
  user,
  posts,
});
