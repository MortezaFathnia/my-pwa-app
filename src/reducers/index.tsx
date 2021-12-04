import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  posts: postsReducer,
  login: loginReducer,
});
